import React from "react";
import "./styles.scss";

import Legal from "./Legal";

export default function Footer() {
  return (
    <>
      <div className="footer__container">
        <div className="footer__services">
          <div className="ourservices ">
            <h1>our services</h1>
            <ul>
              <li>The Concept</li>
              <li>Partner Services</li>
            </ul>
          </div>
          <div className="buy">
            <h1>buy</h1>

            <ul>
              <li>Tracking</li>
              <li>Authentication</li>
              <li>Shipping Policy</li>
              <li>Return Policy</li>
              <li>Quality Control</li>
            </ul>
          </div>
          <div className="sell">
            <h1>sell</h1>

            <ul>
              <li>How to Sell</li>
              <li>Sell an Item</li>
              <li>Handling</li>
              <li>Trusted Sellers</li>
            </ul>
          </div>
          <div className="help">
            <h1>Help</h1>

            <ul>
              <li>Help Center</li>
            </ul>
          </div>
          <div className="llc">
            <h1>Libas llc</h1>

            <ul>
              <li>About US</li>
              <li>How it Works</li>
              <li>Latest Stories</li>
              <li>Our Team</li>
              <li>Join Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <Legal />
    </>
  );
}
