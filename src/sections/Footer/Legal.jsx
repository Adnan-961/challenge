import React from "react";
import twitter from "../../assets/images/twitter-sign.png";
import fb from "../../assets/images/facebook.png";
import insta from "../../assets/images/instagram.png";
import stores from "../../assets/images/stores.png";
import arrow from "../../assets/images/arrow.png";
import credit from "../../assets/images/credit.png";
export default function Legal() {
  return (
    <>
      <div className="footer__legal">
        <div className="legal__details">
          <div className="footer__accordion">
            <span>
              Lebanon - English US - $ - USD{" "}
              <img
                src={arrow}
                alt="accordion arrow"
                className="footer__accordion__arrow"
                width={"20px"}
              />
            </span>
          </div>

          <div className="sub__footer">
            <ul>
              <li>Legal information</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy & Cookies</li>
              <li>Partners</li>
            </ul>
            <div className="footer__logos">
              <div className="socialmedia">
                <img src={twitter} alt="twitter" />
                <img src={fb} alt="facebook" />
                <img src={insta} alt="instagram" />
              </div>
              <div className="app__links">
                <img src={stores} alt="store links" className="stores" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partnership">
        <div className="partner__text">
          <p>
            {" "}
            except for brand partner items libas LLC has no association and/or
            affiliation with the brands whoese items are offered for sale on its
            website/app.
          </p>
          <p>
            Except for brand approved items the Authentication is performed
            independently by Libas LLC.
          </p>
        </div>
        <div className="credit">
          <img
            src={credit}
            alt="credit cards image"
            width={"180px"}
            height="100px"
          />
          <div className="signature">
            <span> Lebanon - UAE - USA - Canada</span>
            <span>2022 - Libas LLC ®</span>
          </div>
        </div>
      </div>
    </>
  );
}
