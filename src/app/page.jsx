"use client";
import Image from "next/image";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect } from "react";
import OwlCarousel from "@/components/OwlCarousel/OwlCarousel";
import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import Content from "@/components/Content/Content";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
    });
  }, []);
  useEffect(() => {
    import("jquery").then(($) => {
      window.jQuery = $;
      require("owl.carousel");
    });
  }, []);

  return (
    <>
      <Navbar />
      <Banner
        h2Text={"Ship parcels quickly "}
        pText={
          "Our company offers fast, reliable and affordable delivery services around the globe!"
        }
        spanText={"national and worldwide"}
        img={"/images/pexels-albinberlin-906982.jpg"}
      />
      <Content />
      <Footer />
    </>
  );
}
