"use client";
import { createContext, useState, useEffect } from "react";

const ShipmentContext = createContext();

export const ShipmentProvider = ({ children }) => {
  const [shipments, setShipments] = useState(null);
  const [shipmentStatus, setShipmentStatus] = useState("pending");
  const [shipmentPosition, setShipmentPosition] = useState([0, 0]);
  const [currentStep, setCurrentStep] = useState(0);
  const [user, setUser] = useState(() => {
    // Initialize user from local storage
    if (typeof window !== "undefined") {
      return localStorage.getItem("user") || "";
    }
    return "";
  });

  useEffect(() => {
    // Save user to local storage whenever it changes
    if (typeof window !== "undefined") {
      localStorage.setItem("user", user);
    }
  }, [user]);

  console.log("Current shipment position in context:", shipmentPosition);

  return (
    <ShipmentContext.Provider
      value={{
        shipments,
        setShipments,
        shipmentStatus,
        setShipmentStatus,
        shipmentPosition,
        setShipmentPosition,
        currentStep,
        setCurrentStep,
        user,
        setUser,
      }}
    >
      {children}
    </ShipmentContext.Provider>
  );
};

export default ShipmentContext;
