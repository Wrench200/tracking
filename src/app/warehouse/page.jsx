"use client";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import style from "./page.module.css";
import Link from "next/link";

function Page() {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    Aos.init({
      duration: 500, // Animation duration in milliseconds
    });
  }, []);
  return (
    <>
      <Navbar />
      <Banner
        location={"/contact"}
        // button={"CONTACT US"}
        img={"/images/banr.jpg"}
        h2Text={"FastLane Global Courier:"}
        spanText={"Your trusted partner for international shipping"}
        button={"CONTACT US"}
      />
      <div className={style.floatB}>
        <h1>Reliable and Affordable International Shipping Services</h1>

        <p>
          FastLane Global Courier offers swift, dependable international
          shipping at competitive rates. With a legacy of over 25 years, our
          extensive network reaches across more than 220 countries and
          territories. Rest assured, your shipment is guaranteed to reach its
          destination on time. Our commitment? Delivering nothing short of the
          finest, comprehensive international courier service at the optimal
          price.{" "}
        </p>
        <p>
          Benefit from our tailored and cost-effective turnkey solutions,
          meticulously crafted to address even the most intricate logistics
          needs. Whether you require Full Container Load (FCL) or Less than
          Container Load (LCL) options, our flexible approach guarantees secure,
          reliable, and swift freight forwarding services.
        </p>
        <p>
          Trust us to strengthen your supply chain, facilitating seamless
          shipments across Canada, the U.S., and worldwide. Partner with
          FastLane for unparalleled logistics expertise and service excellence.{" "}
        </p>
      </div>
      <section>
        <div className="central">
          <div className={style.logistics}>
            <h1>
              Elevated Import and Export all-inclusive solutions: Trust FastLane
              for your Worldwide Deliveries
            </h1>
            <p
              style={{
                margin: "3em 0",
              }}
            >
              FastLane Global Courier provides express international shipping
              services for individual parcels as well as grouped shipments. Our
              extensive network encompasses numerous multiple countries offering
              both export and import express delivery solutions.
            </p>
          </div>
        </div>
        <div className={style.freightInfo}>
          <div className={style.freight}>
            <div className={style.fCard}>
              <div className={style.topCard}>
                <div className={style.icon}>
                  <img src="/images/lov.png" alt="" />
                </div>
                <h2>Express Export Service</h2>
              </div>
              <div className={style.cardbot}>
                <p>
                  The FastLane Express Export Service guarantees fast, on-time
                  delivery to over 220 countries. Our competitive rates include
                  customs clearance.
                </p>
              </div>
            </div>
            <div className={style.fCard}>
              <div className={style.topCard}>
                <div className={style.icon}>
                  <img src="/images/plane.svg" alt="" />
                </div>
                <h2>Express Plus* Export Service</h2>
              </div>
              <div className={style.cardbot}>
                <p>
                  The FastLane Express Plus Export Service assures swift
                  delivery to over 220 countries including customs clearance and
                  backed by our a money-back satisfaction guarantee. Our Express
                  Plus service guarantees delivery on the scheduled day and
                  time. *Satisfaction guaranteed or money back.
                </p>
              </div>
            </div>
            <div className={style.fCard}>
              <div className={style.topCard}>
                <div className={style.icon}>
                  <img src="/images/gd.svg" alt="" />
                </div>
                <h2>Import and Export Services</h2>
              </div>
              <div className={style.cardbot}>
                <h2>Tailor-made to your needs</h2>

                <p>
                  The FastLane Express Import Export Service provides secure and
                  dependable international shipments from around the world.
                  Customs clearance fees are included.
                </p>
              </div>
            </div>
          </div>
          <div className="central">
            <div className={style.botInfo}>
              <h1>
                FastLane Global Courier: your shipping solution for
                international parcel delivery
              </h1>
              <p>
                Rely on FastLane Global Courier for express international
                shipping. Our premium customer service encompasses express
                shipping solutions within Canada, to the U.S. and
                internationally to over 220 countries worldwide. Select from a
                diverse array of options, including document, parcel and pallet
                shipping (with both LCL and FCL options), as well as specialized
                services such as artwork shipping, all offered at competitive
                rates.
              </p>
              <div>
                <span>
                  Not what you’re looking for? At FastLane, we offer a full
                  range of services, including same-day delivery and
                  international courier services.
                </span>
                <p>
                  Whatever your shipping requirements may be, FastLane has the
                  expertise and resources to meet them with precision and
                  efficiency.
                </p>
              </div>
              <div className={style.buttons}>
                <button onClick={() => navigate.push("/contact")}>
                  CONTACT US
                </button>
                <Link href={""}>123-456-789</Link>
              </div>
            </div>
          </div>
          <div className={`${style.freight} ${style.f2}`}>
            <div className={style.fCard}>
              <div className={style.topCard}>
                <div className={style.icon}>
                  <img src="/images/tn.png" alt="" />
                </div>
                <h2>Simple, reliable global shipping</h2>
              </div>
              <div className={style.cardbot}>
                <p>
                  Enhance your international shipping logistics and ship your
                  parcels with confidence. With our network of top-tier
                  transport partners, we guarantee efficient and on-time
                  delivery.{" "}
                </p>
              </div>
            </div>
            <div className={style.fCard}>
              <div className={style.topCard}>
                <div className={style.icon}>
                  <img src="/images/plane.svg" alt="" />
                </div>
                <h2>Flexible international delivery</h2>
              </div>
              <div className={style.cardbot}>
                <p>
                  FastLane Global Courier offers global coverage and custom
                  solutions for international parcel shipments. We treat each
                  package with care and precision.{" "}
                </p>
              </div>
            </div>
            <div className={style.fCard}>
              <div className={style.topCard}>
                <div className={style.icon}>
                  <img src="/images/truck.svg" alt="" />
                </div>
                <h2>Swift shipping at competitive rates</h2>
              </div>
              <div className={style.cardbot}>
                <p>
                  High-quality customer service paired with competitive rates
                  for all your shipping logistics requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="central">
            <div className={style.botInfo}>
              <h1>Simplify your international shipping with FastLane </h1>
              <p>
                Contact our team for a quick estimate or to find out more about
                our services.{" "}
              </p>
              <div>
                <p>
                  Simplify your international shipping with FastLane Contact our
                  team for a quick estimate or to find out more about our
                  services. Count on FastLane Global Worldwide Courier for
                  express international delivery of parcels, envelopes or other
                  specialized freight. Call <Link href={""}>514-739-3977</Link>{" "}
                  to open an account today. Let us leverage our international
                  shipping expertise to serve for you.
                </p>
              </div>
              <div className={style.buttons}>
                <button onClick={() => navigate.push("/contact")}>
                  CONTACT US
                </button>
                <Link href={""}>123-456-789</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="central ">
          <div className={style.choice}>
            <div className={style.left}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                id="plane"
              >
                <g fill="#fff" transform="translate(5 -1031.362)">
                  <circle
                    cx="8"
                    cy="1044.362"
                    r="13"
                    fill="#239fdb"
                    fill-rule="evenodd"
                  ></circle>
                  <path
                    style={{
                      lineHeight: "normal",
                      textIndent: 0,
                      textAlign: "start",
                      textDecorationLine: "none",
                      textDecorationStyle: "solid",
                      textDecorationColor: "#000",
                      textTransform: "none",
                      blockProgression: "tb",
                      isolation: "auto",
                      mixBlendMode: "normal",
                    }}
                    fill="#0b5ecd"
                    d="m13.623 25.977.297-.01a13.002 13.002 0 0 0 2.557-.442c.3-.087.956-.302 1.25-.41l-5.622-5.88c.07-.146.002.355-.076.214l5.672 5.672.01-.004a13 13 0 0 0 4.346-2.79 13 13 0 0 0 3.363-5.485 13 13 0 0 0 .574-3.715L19.438 6.57a1.896 1.896 0 0 0-.3-.248h-.003a1.899 1.899 0 0 0-.317-.17l-.02-.01-.003-.001A1.934 1.934 0 0 0 18.07 6c-.496 0-.993.191-1.367.57L14.1 9.207 9.28 6.535a.5.5 0 0 0-.596.082L6.824 8.48a.5.5 0 0 0 .065.76l3.611 3.612-1.955 1.982a.5.5 0 0 0-.129.186l-1.873-1.135a.5.5 0 0 0-.615.074L4.15 15.764a.5.5 0 0 0 .106.785l5.047 5.047.07.13a.5.5 0 0 0 .209.21zM9.166 15.619l1.215 1.402.117-.07-1.334-1.334c.032-.022-.024.03.002.002z"
                    color="#000"
                    font-family="sans-serif"
                    font-weight="400"
                    transform="translate(-5 1031.362)"
                  ></path>
                  <path
                    d="M14.072.004c-.496 0-.993.191-1.367.57l-2.603 2.637L5.282.539a.5.5 0 0 0-.239-.062v.002a.5.5 0 0 0-.357.144l-1.86 1.863a.5.5 0 0 0 .065.76l4.214 3L4.547 8.84a.5.5 0 0 0-.129.185L2.545 7.891a.5.5 0 0 0-.287-.073.5.5 0 0 0-.328.147L.152 9.77a.5.5 0 0 0 .106.785L3.643 12.5l1.732 3.232a.5.5 0 0 0 .799.118l1.775-1.801a.5.5 0 0 0 .082-.594l-.926-1.685 2.727-2.764 2.85 4.037a.5.5 0 0 0 .767.06l1.82-1.874a.5.5 0 0 0 .08-.584l-2.495-4.7 2.585-2.62a1.964 1.964 0 0 0 0-2.75c-.374-.38-.87-.571-1.367-.571zm0 .988c.235 0 .469.095.655.283a.954.954 0 0 1 0 1.348l-8.24 8.346L5.165 9.62a.5.5 0 0 0 .09-.078l2.959-2.998.012-.01a.5.5 0 0 0 .003-.004l2.317-2.347 2.871-2.909a.917.917 0 0 1 .654-.283Zm-8.945.606 4.246 2.351-.475.483-1.082 1.095-3.865-2.752 1.176-1.177Zm6.99 5.093 2.18 4.1-1.147 1.184-2.603-3.692 1.57-1.592zM2.363 8.95l1.828 1.108 1.893 1.933.89 1.621-1.037 1.051-1.48-2.762a.5.5 0 0 0-.191-.195l-2.948-1.697 1.045-1.059Z"
                    color="#000"
                    font-family="sans-serif"
                    font-weight="400"
                    overflow="visible"
                    transform="translate(-1.001 1037.358)"
                    style={{
                      lineHeight: "normal",
                      textIndent: 0,
                      textAlign: "start",
                      textDecorationLine: "none",
                      textDecorationStyle: "solid",
                      textDecorationColor: "#000",
                      textTransform: "none",
                      blockProgression: "tb",
                      isolation: "auto",
                      mixBlendMode: "normal",
                    }}
                  ></path>
                </g>
              </svg>{" "}
            </div>
            <div className={style.right}>
              <ul>
                <li
                  onClick={() => setStage(1)}
                  style={{
                    borderBottom: stage != 1 && " 2px dotted",
                  }}
                >
                  <div>
                    <p>Parcel delivery</p>
                    {stage != 1 ? (
                      <i
                        style={{
                          color: stage === 1 && " royalblue",
                        }}
                        class="fa fa-plus-circle"
                        aria-hidden="true"
                      ></i>
                    ) : (
                      <i
                        style={{
                          color: stage === 1 && " royalblue",
                        }}
                        class="fa fa-minus-circle"
                        aria-hidden="true"
                      ></i>
                    )}
                  </div>
                  {stage === 1 && (
                    <span>
                      We have been moving your goods since 1990 and are
                      committed to providing you with a great service every time
                    </span>
                  )}
                </li>
                <li
                  onClick={() => setStage(2)}
                  style={{
                    borderBottom: stage != 2 && " 2px dotted",
                  }}
                >
                  <div>
                    <p>parcels throughout europe</p>
                    {stage != 2 ? (
                      <i
                        style={{
                          color: stage === 2 && " royalblue",
                        }}
                        class="fa fa-plus-circle"
                        aria-hidden="true"
                      ></i>
                    ) : (
                      <i
                        style={{
                          color: stage === 2 && " royalblue",
                        }}
                        class="fa fa-minus-circle"
                        aria-hidden="true"
                      ></i>
                    )}
                  </div>
                  {stage === 2 && (
                    <span>
                      Send parcels throughout Europe with our DPD Classic
                      service—from Spain to Denmark, Germany to Estonia, the
                      Netherlands to Austria, and more. We also offer domestic
                      services within each of these countries; for example, from
                      one address in France to another.
                    </span>
                  )}
                </li>
                <li
                  onClick={() => setStage(3)}
                  style={{
                    borderBottom: stage != 3 && " 2px dotted",
                  }}
                >
                  <div>
                    <p>frieght</p>
                    {stage != 3 ? (
                      <i
                        style={{
                          color: stage === 3 && " royalblue",
                        }}
                        class="fa fa-plus-circle"
                        aria-hidden="true"
                      ></i>
                    ) : (
                      <i
                        style={{
                          color: stage === 3 && " royalblue",
                        }}
                        class="fa fa-minus-circle"
                        aria-hidden="true"
                      ></i>
                    )}
                  </div>
                  {stage === 3 && (
                    <span>
                      We combine longstanding freight expertise with a suite of
                      freight services tailored to your shipping needs. Our
                      relationship with international carriers and shipping
                      companies, following over 20 years in the freight
                      forwarding business, allows us to negotiate the best
                      possible rates.
                    </span>
                  )}
                </li>
                <li
                  onClick={() => setStage(4)}
                  style={{
                    borderBottom: stage != 4 && " 2px dotted",
                  }}
                >
                  <div>
                    <p>fufilment services</p>
                    {stage != 4 ? (
                      <i
                        style={{
                          color: stage === 4 && " royalblue",
                        }}
                        class="fa fa-plus-circle"
                        aria-hidden="true"
                      ></i>
                    ) : (
                      <i
                        style={{
                          color: stage === 4 && " royalblue",
                        }}
                        class="fa fa-minus-circle"
                        aria-hidden="true"
                      ></i>
                    )}
                  </div>
                  {stage === 4 && (
                    <span>
                      With fulfilment services from Europa Lieferung Express.
                      we’ll store your inventory at our depot and ship out to
                      your customers. It saves time and effort on your part, and
                      allows your business to stay flexible and responsive as
                      your consumer base grows.
                    </span>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <p
            style={{
              fontSize: "13px",
              margin: "1em 0",
              padding: "1em",
            }}
          >
            With supply chains becoming ever more complex and global, a
            company’s ability to effectively control and maintain visibility of
            processes, data flows and the status of shipments is critical to
            remaining competitive.
          </p>
          <p
            style={{
              fontSize: "12px",
              margin: "1em 0",
              padding: "1em",
            }}
          >
            To assist clients with this challenge, Europa Lieferung Express have
            developed a Lead Logistics Provider (LLP or 4PL) solution that
            delivers:
          </p>

          <div className={style.uls}>
            <div>
              <h2>APPROACH</h2>
              <ul>
                <li>Global, regional and local strategies</li>
                <li>End-to-end supply chain visibility</li>
                <li>Ensures data quality</li>
                <li>Management of legislative developments</li>
              </ul>
            </div>
            <div>
              <h2>PLANNING</h2>
              <ul>
                <li>Process management</li>
                <li>Identify consolidation opportunities</li>
                <li>Continuous improvement</li>
                <li>Transport mode migration- air to sea</li>
              </ul>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Page;
