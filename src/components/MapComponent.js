import React, { useEffect, useRef, useContext, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import ShipmentContext from "@/contexts/ShipmentContext";

const defaultIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const PackageIcon = new L.Icon({
  iconUrl:
    "https://static-00.iconduck.com/assets.00/map-marker-icon-1366x2048-7u371uwd.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapComponent = ({
  senderCoords,
  receiverCoords,
  trackingNumber,
  height,
  minh,
  mar,
}) => {
  const mapRef = useRef(null);
  const movingMarkerRef = useRef(null);
  const routeRef = useRef(null);
  const intervalRef = useRef(null);
  const {
    shipmentStatus,
    shipmentPosition,
    setShipmentPosition,
    setShipmentStatus,
    currentStep,
    setCurrentStep,
  } = useContext(ShipmentContext);

  const [route, setRoute] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined" && senderCoords && receiverCoords) {
      if (!mapRef.current) {
        console.log("Initializing the map");
        mapRef.current = L.map("map").setView(senderCoords, 6);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapRef.current);

        L.marker(senderCoords, { icon: defaultIcon })
          .addTo(mapRef.current)
          .bindPopup("Sender Location")
          .openPopup();
        L.marker(receiverCoords, { icon: defaultIcon })
          .addTo(mapRef.current)
          .bindPopup("Receiver Location")
          .openPopup();

        const routingControl = L.Routing.control({
          waypoints: [
            L.latLng(senderCoords[0], senderCoords[1]),
            L.latLng(receiverCoords[0], receiverCoords[1]),
          ],
          routeWhileDragging: false,
          show: false,
        }).addTo(mapRef.current);

        routingControl.on("routesfound", (e) => {
          const routes = e.routes;
          if (routes.length > 0) {
            const waypoints = routes[0].coordinates;
            setRoute(waypoints);
          }
        });

        routeRef.current = routingControl;
      }
    }
  }, [senderCoords, receiverCoords]);

  useEffect(() => {
    const fetchShipmentStatus = async () => {
      try {
        const res = await fetch("/api/shipmentStatus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ trackingNumber }),
        });

        if (res.status === 200) {
          const data = await res.json();
          console.log("Fetched data:", data);
          if (
            data.position &&
            (data.position[0] !== 0 || data.position[1] !== 0)
          ) {
            setShipmentStatus(data.status);
            setShipmentPosition(data.position);
            setCurrentStep(data.currentStep);
          } else {
            console.warn("Invalid position data:", data.position);
          }
        } else {
          console.error("Failed to fetch shipment status:", res.statusText);
        }
      } catch (error) {
        console.error("Error fetching shipment status:", error);
      }
    };

    fetchShipmentStatus();
    const interval = setInterval(fetchShipmentStatus, 5000);

    return () => clearInterval(interval);
  }, [trackingNumber, setShipmentStatus, setShipmentPosition, setCurrentStep]);

  useEffect(() => {
    console.log("Shipment position updated to:", shipmentPosition);
    if (movingMarkerRef.current && mapRef.current) {
      movingMarkerRef.current.setLatLng(
        L.latLng(shipmentPosition[0], shipmentPosition[1])
      );
      console.log("Marker position updated on the map");
    } else if (mapRef.current) {
      movingMarkerRef.current = L.marker(shipmentPosition, {
        icon: PackageIcon,
      }).addTo(mapRef.current);
      console.log("New moving marker added at position:", shipmentPosition);
    }
  }, [shipmentPosition]);

  useEffect(() => {
    const updateShipmentPosition = async () => {
      try {
        const res = await fetch("/api/updateShipmentPosition", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            trackingNumber,
            position: shipmentPosition,
            currentStep,
          }),
        });

        if (res.status !== 200) {
          console.error("Failed to update shipment position:", res.statusText);
        }
      } catch (error) {
        console.error("Error updating shipment position:", error);
      }
    };

    if (shipmentPosition && shipmentPosition.length === 2) {
      updateShipmentPosition();
    }
  }, [shipmentPosition, currentStep, trackingNumber]);

  const startRouteInterval = () => {
    intervalRef.current = setInterval(() => {
      console.log("Interval running - currentStep:", currentStep);
      if (currentStep < route.length) {
        setShipmentPosition([route[currentStep].lat, route[currentStep].lng]);
        setCurrentStep((prevStep) => prevStep + 1);
      } else {
        clearInterval(intervalRef.current);
      }
    }, 5000);
  };

  useEffect(() => {
    if (
      route.length > 0 &&
      (shipmentStatus === "intransit" || shipmentStatus === "Intransit")
    ) {
      console.log("Starting route interval");
      startRouteInterval();
    }

    const handleVisibilityChange = () => {
      const state = document.visibilityState;
      console.log("Visibility change detected, state:", state);
      if (state === "hidden") {
        console.log("Page hidden, keeping route interval running");
      } else if (state === "visible") {
        console.log("Page visible, route interval is already running");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(intervalRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [route, shipmentStatus, currentStep, setShipmentPosition, setCurrentStep]);

  console.log(shipmentStatus);
  return (
    <div
      id="map"
      style={{ height: height, width: "100%", minHeight: minh, margin: mar }}
    ></div>
  );
};

export default MapComponent;
