import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
// import './style.css'; // Assuming you have a style.css file in the same directory

function Banner({ spanText, h2Text, pText, img, button,location }) {
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
      <div className="slider">
        <div className="list">
          <div className={"items active"}>
            <Image width={1000} height={1000} src={img} alt={"image"} />
            <div className="content">
              <h2>{h2Text}</h2>
              <span>{spanText}</span>
              <p>{pText}</p>
              <button onClick={() => navigate.push(`${location}`)}>
                {button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
