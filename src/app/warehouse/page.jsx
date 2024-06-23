"use client";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect } from "react";
import style from "./page.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Page() {
  useEffect(() => {
    Aos.init({
      duration: 500, // Animation duration in milliseconds
    });
  }, []);
  return (
    <section>
      <Navbar />
      <Banner
        img={"/images/pexels-tomfisk-3076002.jpg"}
        content={"WAREHOUSE"}
        height={"30vh"}
      />
      <div className="central log">
        <p
          style={{
            fontSize: "11px",
            margin: "1em 0",
          }}
        >
          As a full-service moving company, Europa Lieferung Express is able to
          offer residential movers with secure, affordable storage-in-transit
          (SIT) options as a complement to our traditional moving services.
        </p>
        <p
          style={{
            fontSize: "11px",
            margin: "1em 0",
          }}
        >
          If you’re planning a move but your new residence isn’t quite ready, or
          you need some additional storage space while you sell your previous
          home, Europa Lieferung Express can help. Our specialized storage
          services provide an easy-to-use, flexible solution when you’re faced
          with moving schedule challenges. We’ll store your belongings at our
          secure, convenient storage facilities as part of the moving process,
          hold them on site until your new home is ready, then move them into
          your new space when you are ready.
        </p>
        <div className={style.storage}>
          <div className={style.box} data-aos="fade-up">
            <div className={style.imb}>
              <img src="/images/YOUR-PRODUCTS-ARE-INSURED.webp" alt="" />
            </div>
            <h2>your products are insured</h2>
            <p>
              With our active insurance policy, you can be sure of your goods
              reaching your Destination safely
            </p>
          </div>
          <div className={style.box} data-aos="fade-up">
            <div className={style.imb}>
              <img src="/images/22.000-SQM-STORAGE-SPACE.webp" alt="" />
            </div>
            <h2>22.000 SQM STORAGE SPACE</h2>
            <p>
              With our variety storage capacity, we can store your cargo based
              on perish-ability
            </p>
          </div>
          <div className={style.box} data-aos="fade-up">
            <div className={style.imb}>
              <img src="/images/724-PRIVATE-SECURITY.webp" alt="" />
            </div>
            <h2>24/7 PRIVATE SECURITY</h2>
            <p>
              Your goods are well secured with a 24/7 security thereby keeping
              your goods safe
            </p>
          </div>
        </div>
        <div className={style.move}>
          <div className={style.left}>
            <h1>moving and storage</h1>
            <p>
              At Europa Lieferung Express, we take the transportation of your
              cargo personally and we offer customers a vast and modern fleet of
              containers. From straightforward dry boxes to garmentainers to
              state-of-the-art controlled atmosphere reefers, Europa Lieferung
              Express has the size and type of box to suit your needs. Our
              modern offices are happy to advise you on which is the best
              container for your cargo.
            </p>
            <ul>
              <li>General purpose</li>
              <li>High cube</li>
              <li>Refrigirated</li>
              <li>Open top</li>
              <li>Flatracks</li>
            </ul>
          </div>
          <div className={style.right}>
            <img src="/images/pexels-pixabay-163726.jpg" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Page;
