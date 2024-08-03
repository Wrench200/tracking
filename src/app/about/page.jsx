"use client";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect } from "react";
import style from "./page.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Page() {
  const navigate = useRouter();
  useEffect(() => {
    Aos.init({
      duration: 500, // Animation duration in milliseconds
    });
  }, []);
  const phoneNumber = ""; // Replace with your phone number
  const preFilledMessage =
    "Hello! I need assistance with tracking my shipment. Thank you!";

  // URL encode the message
  const encodedMessage = encodeURIComponent(preFilledMessage);

  // Create the SMS link
  const smsLink = `sms:${phoneNumber}?&body=${encodedMessage}`;

  return (
    <>
      <Navbar />
      <Banner
        img={"/images/pexels-bernard-foss-3049419-4620555.jpg"}
        h2Text={"Reliable parcel pick-up and delivery services,"}
        location={""}
        spanText={" anywhere in the world"}
      />
      <section className={`central ${style.section}`}>
        {/* <div className={style.infoC} data-aos="fade-up">
          <div className={style.texts}>
            <p
              className="text1"
              style={{
                color: "indianred",
                fontSize: "15px",
              }}
            >
              SwiftSea Logistics was opened in the late {"1990’s"} with a small
              customer database, operating as a fully licensed customs clearing
              company. Throughout the years, the company has slowly expanded
              providing a variety of services, such as
            </p>
            <p
              className="text2"
              style={{
                fontSize: "12px",
              }}
            >
              Warehousing Facility, Licensed Bonded Warehouse Storage, Customs
              Clearance Procedures from all {"Ports/Airport"}, Consultation for
              Customs Regulations, Global Logistics, Inland Transportation,
              Insurance of Goods, Order Fulfilment Services, {"Packaging /"}
              Repackaging of Goods, Door to Door service.
            </p>
            <p
              className="text3"
              style={{
                fontSize: "12px",
              }}
            >
              SwiftSea Logistics is the leader of container transportation
              through the East through international sea container lines to/from
              Asian countries, domestic sea container lines, and rail. Switch
              Express Mail is the leading port container operator in the East
              region. Fast Discreet Logistics controls the Commercial Ports
              which have a capacity of 3.9 million tons of general cargo and oil
              products, 150,000 vehicles, and over 600,000 TEU of containers.
              SwiftSea Logistics is among the top largest World private mail
              operators. We operate a fleet of over 16.2 thousand units of
              rolling stock. Europa Lieferung Express has a fleet of 20 vessels,
              mostly deployed through their own sea service lines.
            </p>
          </div>
          <div className="imageB">
            < Image width={500} height={500}
              src={"/images/pexels-bernard-foss-3049419-4620555.jpg"}
              width={500}
              height={500}
              alt="image"
            />
          </div>
        </div> */}
        <div className={style.floatB}>
          <h1>
            Your Courier Company for Deliveries within your local enviroment and
            Abroad
          </h1>
          <p>
            At Sailwind , each package is handled with meticulous care,
            guaranteeing complete satisfaction both locally and globally. Our
            commitment goes beyond mere shipping; we craft seamless delivery
            experiences customized to your specific needs.
          </p>
          <p>
            Our secret? A team of passionate and dedicated experts, working
            diligently to make sure your shipments reach their destination
            safely and on time. We’re here to keep our promises, and help you do
            the same.
          </p>
          <div className={style.buttons}>
            <button onClick={() => navigate.push("/contact")}>
              CONTACT US TODAY
            </button>
            <Link href={smsLink}>{""}</Link>
          </div>
        </div>
        <div className={style.abouts}>
          <div className={style.lefta}>
            <Image width={500} height={500} src="/images/bxman.png" alt="" />
          </div>
          <div className={style.righta}>
            <h1>Sailwind : a success story since 1995</h1>
            <p>
              Founded in the dynamic city of Montreal in 1995, Sailwind Global
              Courier rose rapidly through the ranks to become a benchmark in
              the world of express delivery.
            </p>
            <p>
              With more than 25 years of experience, we deliver to more than 220
              destinations worldwide. Our name rhymes with reliability and
              efficiency while our values include honouring our commitments and
              respecting the well-being of our team.
            </p>
            <p>
              At FastLane, we adapt to your shipping needs and provide premium
              courier services to a variety of industries including
              manufacturing, textiles, automotive, furniture, engineering and
              architecture.
            </p>
            <p>
              Our pride and joy? We are the official carriers for prestigious
              institutions such as Quebec universities, the Quebec government,
              the Quebec Health Network and much more. We’re also recognized for
              our expertise in transporting works of art, and will guarantee the
              safety of your most precious possessions.
            </p>
          </div>
        </div>
      </section>
      <h1 className={style.introa}>Reliable services, satisfied customers</h1>
      <section className={style.detailedInfo}>
        <section className={`central`}>
          <div className={style.topLine}>
            <div className={style.topBox}>
              <h1>7M+</h1>
              <p>orders and still as passionate as ever.</p>
            </div>
            <div className={style.topBox}>
              <h1>+95%</h1>
              <p>on-time delivery – Your time matters.</p>
            </div>
            <div className={style.topBox}>
              <h1>200+</h1>
              <p>
                dynamic delivery drivers in action in Montreal and Quebec City.
              </p>
            </div>
            <div className={style.topBox}>
              <h1>194772+</h1>
              <p>satisfied partners – Join the family!</p>
            </div>
            <div className={style.topBox}>
              <h1>4.8/5</h1>
              <p>on Google – Your trust in our services makes us proud.</p>
            </div>
          </div>
          <div className={style.boxintro}>
            <h1>Sailwind : overcoming challenges with adaptable solutions</h1>
            <p>
              Your challenge is our mission! At FastLane, we understand that
              every delivery is unique. We adapt to your specific shipping needs
              with custom courier solutions. Our team of experts is ready to
              meet the transport and delivery requirements of both standard and
              non-standard packages.
            </p>
            <div className={style.stats}>
              <div className={style.statLine}>
                <Image width={500} height={500} src="/images/st1.png" alt="" />
                <h2>Custom solutions</h2>
              </div>
              <div className={style.statLine}>
                <Image width={500} height={500} src="/images/st2.png" alt="" />
                <h2>Custom solutions</h2>
              </div>
              <div className={style.statLine}>
                <Image width={500} height={500} src="/images/st3.png" alt="" />
                <h2>Custom solutions</h2>
              </div>
            </div>
            <h3>
              Sailwind is more than a courier company – we’re your strategic
              partner for logistics and freight forwarding. Contact us and
              discover the Sailwind difference.
            </h3>
            <div className={style.buttons}>
              <button onClick={() => navigate.push("/contact")}>
                CONTACT US TODAY
              </button>
              <Link href={smsLink}>{""}</Link>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Page;
