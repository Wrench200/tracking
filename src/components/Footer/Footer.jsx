"use client";
import Link from "next/link";
import React from "react";
import style from "./Footer.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Footer() {
  const year = new Date().getFullYear();
  const navigate = useRouter();

  const phoneNumber = "+237682454355"; // Replace with your WhatsApp number
  const preFilledMessage =
    "Hello! I need assistance with tracking my shipment.Thank you!";

  // URL encode the message
  const encodedMessage = encodeURIComponent(preFilledMessage);

  // Create the WhatsApp link
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  console.log(whatsappLink);
  return (
    <>
      <div className={style.serve}>
        <div className={style.line}>
          <div className={style.lefts}>
            <Image width={500} height={500} src="/images/bx.svg" alt="" />
          </div>
          <div className={style.rights}>
            <h2>Full Range Services</h2>
            <p>
              Your all-in-one delivery solution: Local, National, USA,
              International, Cargo and Customs Clearance.
            </p>
          </div>
        </div>
        <div className={style.line}>
          <div className={style.lefts}>
            <Image width={500} height={500} src="/images/lock.svg" alt="" />
          </div>
          <div className={style.rights}>
            <h2>Total Status Visibility of Your Shipment</h2>
            <p>
              Real-time tracking of eachFastLane shipment offers complete
              transparency.{" "}
            </p>
          </div>
        </div>

        <div className={style.line}>
          <div className={style.lefts}>
            <Image width={500} height={500} src="/images/support.svg" alt="" />
          </div>
          <div className={style.rights}>
            <h2>24/7 Customer Support</h2>
            <p>Quick response guaranteed around the clock.</p>
          </div>
        </div>
      </div>
      <main class="footer">
        <div className="central">
          <footer>
            <div class="container">
              <div class="footer-top section">
                <div class="footer-brand">
                  <div
                    className={style.left}
                    onClick={() => navigate.push("/")}
                  >
                    <Image
                      src={"/images/Screenshot__217_-removebg-preview.png"}
                      width={500}
                      height={500}
                      alt="image"
                      className={style.logo}
                    />
                  </div>
                  <p class="footer-text">
                    Your fast and secure solution for all your worldwide
                    shipments.
                  </p>

                  <ul class="wrapper">
                    <Link href={whatsappLink} class="icon instagram">
                      <span class="tooltip">Whatsapp</span>
                      <i
                        style={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "#000",
                        }}
                        class="fa-brands fa-whatsapp"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </ul>
                </div>

                <ul class="footer-list">
                  <li>
                    <p class="footer-list-title">Quick Links</p>
                  </li>

                  <li>
                    <Link href="/about" class="footer-link">
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#
                    /logistics"
                      class="footer-link"
                    >
                      Blog
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact" class="footer-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>

                <ul class="footer-list">
                  <li>
                    <p class="footer-list-title">Services</p>
                  </li>

                  <li>
                    <Link href="/warehouse" class="footer-link">
                      Warehouse
                    </Link>
                  </li>

                  <li>
                    <Link href="/logistics" class="footer-link">
                      Air Freight
                    </Link>
                  </li>

                  <li>
                    <Link href="/logistics" class="footer-link">
                      Ocean Freight
                    </Link>
                  </li>

                  <li>
                    <Link href="/logistics" class="footer-link">
                      Road Freight
                    </Link>
                  </li>

                  <li>
                    <Link href="#" class="footer-link">
                      Packaging
                    </Link>
                  </li>
                </ul>

                <ul class="footer-list">
                  <li>
                    <p class="footer-list-title">Community</p>
                  </li>

                  <li>
                    <Link href="#" class="footer-link">
                      Testimonials
                    </Link>
                  </li>

                  <li>
                    <Link href="#" class="footer-link">
                      Track Your Shipment
                    </Link>
                  </li>

                  <li>
                    <Link href="#" class="footer-link">
                      Privacy Policy
                    </Link>
                  </li>

                  <li>
                    <Link href="#" class="footer-link">
                      Terms & Condition
                    </Link>
                  </li>
                </ul>
              </div>

              <div class="footer-bottom">
                <p class="copyright">
                  &copy; {year} FasrLane Global. All Rights Reserved
                  <Link href="#" class="copyright-link"></Link>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}

export default Footer;
