"use client";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect } from "react";
import style from "./page.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

function Page() {
  useEffect(() => {
    Aos.init({
      duration: 500, // Animation duration in milliseconds
    });
  }, []);
  return (
    <>
      <Navbar />
      <Banner img={"/images/pexels-pixabay-262353.jpg"} content={"ABOUT US"} height={"30vh"}/>
      <section className={`central ${style.section}`}>
        <div className={style.infoC} data-aos="fade-up">
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
            <img
              src={"/images/pexels-bernard-foss-3049419-4620555.jpg"}
              width={500}
              height={500}
              alt="image"
            />
          </div>
        </div>
        <div className={style.globe}>
          <h1>WHY CHOOSE US</h1>
          <div className={style.modes}>
            <div className={style.box} data-aos="zoom-out" data-aos-delay={0}>
              <div className={style.image}>
                <i class="fa fa-plane" aria-hidden="true"></i>{" "}
              </div>
              <h2>Fast And Reliable Service</h2>
            </div>
            <div className={style.box} data-aos="zoom-out" data-aos-delay={200}>
              <div className={style.image}>
                <i class="fa fa-map" aria-hidden="true"></i>{" "}
              </div>
              <h2>Available remotely</h2>
            </div>
            <div className={style.box} data-aos="zoom-out" data-aos-delay={400}>
              <div className={style.image}>
                <i class="fas fa-clipboard-check    "></i>{" "}
              </div>
              <h2>BEST AVAILABLE OPTIONS FOR CLIENTS</h2>
            </div>
            <div className={style.box} data-aos="zoom-out" data-aos-delay={600}>
              <div className={style.image}>
                <i class="fas fa-money-bill-wave    "></i>{" "}
              </div>
              <h2>FLEXIBLE PRICE/SERVICE PACKAGES</h2>
            </div>
          </div>
          <div className={style.globeInfo}>
            <div class="holding" data-aos="zoom-in">
              <svg
                // width=""
                // height="11/52"
                viewBox="0 0 1179 1152"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M334.326 882.433C286.784 840.832 249.565 788.747 225.608 730.292C201.651 671.837 191.612 608.613 196.284 545.613C200.956 482.612 220.21 421.56 252.528 367.279C284.845 312.997 329.339 266.972 382.497 232.838C435.656 198.704 496.022 177.396 558.828 170.597C621.635 163.798 685.162 171.694 744.393 193.661C803.625 215.629 856.938 251.066 900.123 297.174C943.307 343.282 975.181 398.799 993.227 459.34"
                  stroke="#34bcbc"
                ></path>
                <path
                  d="M1004.79 648.64C1013.37 664.833 1015.93 679.803 1012.64 693.203C1009.34 706.602 1000.18 718.513 985.151 728.551C955.073 748.642 902.782 760.368 833.826 762.389C764.893 764.409 681.994 756.653 594.053 739.949C506.113 723.245 416.474 698.228 334.785 667.593C253.093 636.957 182.462 601.867 130.485 566.107C104.497 548.227 83.6757 530.526 68.4327 513.478C53.1864 496.426 43.5431 480.052 39.8701 464.829C36.2015 449.624 38.5536 435.84 46.684 423.775C54.8252 411.694 68.7879 401.296 88.4086 392.947C127.656 376.246 187.89 368.446 262.665 370.429"
                  stroke="#fcbe80"
                ></path>
                <path
                  d="M744.537 203.285C799.611 142.519 849.675 104 888.524 92.3818C907.933 86.5773 924.054 87.6324 936.552 95.1925C949.055 102.756 958.037 116.891 963.03 137.469C973.02 178.646 966.532 243.539 944.284 324.159C922.042 404.757 885.047 497.461 837.876 590.785C790.707 684.108 735.44 773.941 678.925 849.156C622.405 924.378 567.139 981.646 519.979 1013.9C496.398 1030.02 475.396 1039.52 457.537 1042.34C439.696 1045.16 425.016 1041.31 413.989 1030.79C402.942 1020.24 395.739 1003.16 392.55 980.179C389.362 957.207 390.194 928.403 395.163 894.489"
                  stroke="#464f8e"
                ></path>
                <path
                  d="M838.407 907.01C820.956 952.118 791.357 980.223 752.688 988.55C713.993 996.883 667.503 985.135 617.98 954.392C568.464 923.652 517.759 875.063 471.093 813.609C424.428 752.157 383.499 680.076 352.52 604.785C321.541 529.492 301.636 453.721 294.846 385.27C288.056 316.813 294.634 258.189 313.854 215.404C333.065 172.639 364.201 147.259 404.047 141.774C443.925 136.285 491.182 150.907 540.967 184.251"
                  stroke="#f09cbc"
                ></path>
              </svg>
              <div class="rotate-globe"></div>
            </div>
            <ul class="about-list" data-aos="fade-up">
              <li class="about-item">
                <div class="about-icon">
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </div>

                <p class="about-text">
                  Go beyond logistics, make the world go round and revolutionize
                  business.
                </p>
              </li>

              <li class="about-item">
                <div class="about-icon">
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </div>

                <p class="about-text">
                  Logistics through innovation, dedication, and technology.
                  ready, set, done.
                </p>
              </li>

              <li class="about-item">
                <div class="about-icon">
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </div>

                <p class="about-text">
                  We take pride in serving our customers safely. together with
                  passion.
                </p>
              </li>

              <li class="about-item">
                <div class="about-icon">
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </div>

                <p class="about-text">
                  Imagination what we can easily see is only a small percentage.
                </p>
              </li>

              <li class="about-item">
                <div class="about-icon">
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </div>

                <p class="about-text">
                  Quality never goes out of style. safety, quality,
                  professionalism.
                </p>
              </li>

              <li class="about-item">
                <div class="about-icon">
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </div>

                <p class="about-text">
                  The quality shows in every move we make where business lives.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <p className={style.conclude}>
          We are committed to keeping our promises and achieving our service
          aims, but we are also realistic and recognize that things {"don’t"}{" "}
          always go according to plan. If you are not happy with the service or
          advice you have received we would invite you to contact our Customer
          Service team who will endeavor to resolve your complaint in a timely
          manner. In the unfortunate event that you are not satisfied with the
          outcome, you can contact our Customer Care team at{" "}
          <Link href="/contact">contact@hyperluxegloballogistic.com</Link>
           We will investigate further.
        </p>
      </section>
      <Footer />
    </>
  );
}

export default Page;
