"use client";
import React, { useContext, useState } from "react";
import style from "./page.module.css";
import { useRouter } from "next/navigation";
import ShipmentContext from "@/contexts/ShipmentContext";

function Page() {
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
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
  } = useContext(ShipmentContext);
  console.log(user);
  console.log(error);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    console.log(name, password);

    if (password == "") {
      setError("Password is required");
      valid = false;
    }

    console.log(valid);
    if (valid) {
      try {
        setIsLoading(true);
        const res = await fetch("api/auth/authentication", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            password,
          }),
        });
        console.log(res.status);
        if (res.status === 200) {
          setIsLoading(false);
          setUser(name);
          router.push("/admin");
        } else if (res.status === 400) {
          setIsLoading(false);
          setError("invalid credentials");
        }
      } catch (error) {
        console.log(error);
        setError(Error);
      }
    }

    if (!valid) return;
  };

  return (
    <section className={style.login}>
      {isLoading && (
        <div className="loadingStuff">
          <div className="loader">
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
            <div className="loader-square"></div>
          </div>
        </div>
      )}
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            id=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={style.pass}>
          <label htmlFor="">Password</label>
          <input
            type={showPass ? "text" : "password"}
            id=""
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <i
            onClick={() => (showPass ? setShowPass(false) : setShowPass(true))}
            class={`fa ${showPass ? "fa-eye-slash" : "fa-eye"}`}
            aria-hidden="true"
          ></i>
        </div>
        <button>login</button>
      </form>{" "}
      {error && <p style={{ color: "red", fontWeight: "600" }}>{error}</p>}
    </section>
  );
}

export default Page;
