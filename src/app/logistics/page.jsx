"use client";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import style from "./page.module.css";

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
        img={"/images/pexels-olly-3769138.jpg"}
        content={"LOGISTICS"}
        height={"30vh"}
      />
      <section>
        <div className="central log">
          <p
            style={{
              fontSize: "12px",
              margin: "1em 0",
            }}
          >
            If you require a quality Road, Air Freight, Rail Freight or Oceanic
            Freight Services ( Road, Air, Rail, Water Transport) logistics
            provider that abides to your precise shipping needs with reliable,
            time reducing and cost effective results, then the services of
            Europa Lieferung Express is exactly what you need.
          </p>
          <p
            style={{
              fontSize: "12px",
              margin: "1em 0",
            }}
          >
            We already know that you require optimum efficiency and
            professionalism for your Inland Transportation needs, be it your
            budgets, location or time constraints. So we supply you with an
            array of streamlined features when you want the most reliable and
            cost effective domestic trucking and inland transportation services
            that spans every city in the World. Hence, you can look forward to
            enlisting the help of a high quality and efficient inland road
            freight partner that acts as an all-in-one solution for all of your
            logistics requirements.
          </p>

          <div className={style.imageBoxes}>
            <div data-aos="zoom-in">
              <img
                src="/images/pexels-tima-miroshnichenko-6169057.jpg"
                alt=""
              />
            </div>
            <div data-aos="zoom-out">
              <i class="fas fa-boxes    "></i>
              <h2>Packaging</h2>
              <p>
                We have all packaging ability for your goods to make sure all is
                save and sound with your cargo .Here we are the ones to make it
                happen
              </p>
            </div>
            <div data-aos="zoom-in">
              <img
                src="/images/pexels-carloscruz-artegrafia-172084181-11087837.jpg"
                alt=""
              />
            </div>
            <div data-aos="zoom-out">
              <i class="fa fa-binoculars" aria-hidden="true"></i>
              <h2>Expertise services</h2>
              <p>
                Always availale to make sure all goes well with your package as
                you can talk with our agents for your solution
              </p>
            </div>
            <div data-aos="zoom-in">
              <img src="/images/pexels-pixabay-358319.jpg" alt="" />
            </div>
            <div data-aos="zoom-out">
              <div className="div">
                <i class="fas fa-truck-loading    "></i>
                <h2>transportation</h2>
                <p>
                  We take what you want to where ever you want us to. Our job is
                  to transport so we love doing it for you
                </p>
              </div>
            </div>
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: "10px",
              margin: "2em 0",
            }}
          >
            Here are the things we do when it comes to Europa Lieferung Express.
            Our customers classify the company to a high range for our prompt
            and reliable services in any aspect of shipping services, holding a
            considerable advantage in our experienced staff, the use of our own
            equipment, as well as the justifying use of port equipment for
            loading & discharging RO/RO (roll-on / roll-off), Container and Bulk
            Vessels.
          </p>
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
              fontSize: "10px",
              margin: "1em 0",
            }}
          >
            With supply chains becoming ever more complex and global, a
            company’s ability to effectively control and maintain visibility of
            processes, data flows and the status of shipments is critical to
            remaining competitive.
          </p>
          <p
            style={{
              fontSize: "10px",
              margin: "1em 0",
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
