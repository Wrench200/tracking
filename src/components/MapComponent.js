import React, { useEffect, useRef, useContext, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ShipmentContext from "@/contexts/ShipmentContext";
import * as turf from "@turf/turf";

// Set your Mapbox access token here
mapboxgl.accessToken =
  "pk.eyJ1IjoiaG9taWVxdWFuIiwiYSI6ImNsd3h6bGx6NTEwZW4yaXNhbmwwYW9iY2YifQ.YH2bXNg9LMDO8DGnqC5WFA";

const MapComponent = ({ senderCoords, receiverCoords, trackingNumber }) => {
  const mapRef = useRef(null);
  const movingMarkerRef = useRef(null);
  const { shipmentStatus, setShipmentStatus } = useContext(ShipmentContext);
  const [route, setRoute] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined" && senderCoords && receiverCoords) {
      if (!mapRef.current) {
        console.log("Initializing the map");
        mapRef.current = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/mapbox/streets-v11",
          center: receiverCoords,
          zoom: 8,
        });

        new mapboxgl.Marker({ color: "blue" })
          .setLngLat(senderCoords)
          .setPopup(new mapboxgl.Popup().setHTML("<h4>Sender Location</h4>"))
          .addTo(mapRef.current);

        const receiverMarker = new mapboxgl.Marker({ color: "red" })
          .setLngLat(receiverCoords)
          .setPopup(new mapboxgl.Popup().setHTML("<h4>Receiver Location</h4>"))
          .addTo(mapRef.current);

        // Ensure the popup opens on marker click
        receiverMarker.getElement().addEventListener("click", () => {
          receiverMarker.togglePopup();
        });

        // Fetch route from Mapbox Directions API
        fetch(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${senderCoords.join(
            ","
          )};${receiverCoords.join(",")}?geometries=geojson&access_token=${
            mapboxgl.accessToken
          }`
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.routes && data.routes.length > 0) {
              const routeCoordinates = data.routes[0].geometry.coordinates;
              setRoute(routeCoordinates);

              mapRef.current.addLayer({
                id: "route",
                type: "line",
                source: {
                  type: "geojson",
                  data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "LineString",
                      coordinates: routeCoordinates,
                    },
                  },
                },
                layout: {
                  "line-join": "round",
                  "line-cap": "round",
                },
                paint: {
                  "line-color": "#eb2b2",
                  "line-width": 6,
                },
              });

              // Initialize the moving marker
              movingMarkerRef.current = new mapboxgl.Marker({ color: "blue" })
                .setLngLat(senderCoords)
                .addTo(mapRef.current);
            }
          });
      }
    }
  }, [senderCoords, receiverCoords, shipmentStatus]);

  return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
};

export default MapComponent;
