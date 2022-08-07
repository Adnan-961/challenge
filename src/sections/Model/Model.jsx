import React, { useState } from "react";
import Seller from "../Seller/Seller";
import SellerSection from "../Seller/SellerSection";
import trusted from "../../assets/svgs/trusted.svg";
import "./styles.scss";
import Accordion from "./Accordion";
import AccordionSection from "./AccordionSection";
import stars from "../../assets/svgs/stars.svg";
export default function Model() {
  return (
    <>
      <div className="details__section">
        <div className="model__container">
          <div className="model__section__title">
            <span> Details</span>
          </div>
          <div className="model__details">
            <span className="model__title">Brand</span>
            <span className="description">Chanel</span>
          </div>

          <div className="model__details">
            <span className="model__title">Model</span>
            <span className="description">classic</span>
          </div>

          <div className="model__details">
            <span className="model__title">Condition</span>
            <span className="description">Good</span>
          </div>
          <div className="model__details">
            <span className="model__title">Color</span>
            <span className="description">Black</span>
          </div>
          <div className="model__details">
            <span className="model__title">Size</span>
            <span className="description">Small</span>
          </div>
          <div className="model__details">
            <span className="model__title">Dimensions</span>
            <span className="description">28*18*cm</span>
          </div>
          <AccordionSection />
        </div>
        <SellerSection />
      </div>
    </>
  );
}
