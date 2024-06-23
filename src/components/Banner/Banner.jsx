import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
// import './style.css'; // Assuming you have a style.css file in the same directory

function Banner({ content, img, height }) {
  const [itemActive, setItemActive] = useState(0);
  const intervalRef = useRef(null);
  const path = usePathname();
  const items = [
    {
      img: "/images/pexels-ray-mckay-830131083-19549941.jpg",
      title: "Transport Logistics",
      description:
        "Take the complexity out of customs Freight Solutions with customs brokerage services",
    },
    {
      img: "/images/pexels-brett-sayles-6937711.jpg",
      title: "Quickest & safe Delivery",
      description:
        "Take the complexity out of customs Freight Solutions with customs brokerage services",
    },
    {
      img: "/images/pexels-tomfisk-1427107.jpg",
      title: "ALways Trustable",
      description:
        "Take the complexity out of customs Freight Solutions with customs brokerage services",
    },
  ];

  return (
    <div>
      <div
        className="slider"
        style={{
          height: height,
        }}
      >
        <div className="list">
          {path === "/" ? (
            <div className={"items active"}>
              <Image
                width={1000}
                height={1000}
                src={"/images/pexels-albinberlin-906982.jpg"}
                alt={"image"}
              />
              <div className="content">
                <h2>{"Ship parcels quickly "}</h2>
                <span>national and worldwide</span>
                <p>
                  {
                    "Our company offers fast, reliable and affordable delivery services around the globe!"
                  }
                </p>
              </div>
            </div>
          ) : (
            <div className={`items active centerab`}>
              <img src={img} alt={"image"} />
              <div className="content">
                <h2>{content}</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
