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
          Globex Worldwide Courier offers swift, dependable international
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
          shipments across Canada, the U.S., and worldwide. Partner with Globex
          for unparalleled logistics expertise and service excellence.{" "}
        </p>
      </div>
      <section>
        <div className="central">
          <div className={style.logistics}>
            <h1>
              Elevated Import and Export all-inclusive solutions: Trust Globex
              for your Worldwide Deliveries
            </h1>
            <p style={{
              margin:"3em 0"
            }}>
              Globex Worldwide Courier provides express international shipping
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
                  The Globex Express Export Service guarantees fast, on-time
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
                  The Globex Express Plus Export Service assures swift delivery
                  to over 220 countries including customs clearance and backed
                  by our a money-back satisfaction guarantee. Our Express Plus
                  service guarantees delivery on the scheduled day and time.
                  *Satisfaction guaranteed or money back.
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
                  The Globex Express Import Export Service provides secure and
                  dependable international shipments from around the world.
                  Customs clearance fees are included.
                </p>
              </div>
            </div>
          </div>
          <div className="central">
            <div className={style.botInfo}>
              <h1>
                Globex Courier: your shipping solution for international parcel
                delivery
              </h1>
              <p>
                Rely on Globex Worldwide Courier for express international
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
                  Not what you’re looking for? At Globex, we offer a full range
                  of services, including same-day delivery and international
                  courier services.
                </span>
                <p>
                  Whatever your shipping requirements may be, Globex has the
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
                  Globex Worldwide Courier offers global coverage and custom
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
              <h1>Simplify your international shipping with Globex </h1>
              <p>
                Contact our team for a quick estimate or to find out more about
                our services.{" "}
              </p>
              <div>
                <p>
                  Simplify your international shipping with Globex Contact our
                  team for a quick estimate or to find out more about our
                  services. Count on Globex Worldwide Courier for express
                  international delivery of parcels, envelopes or other
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
            <div className={style.left}></div>
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
