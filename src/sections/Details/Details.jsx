import React from "react";
import "./styles.scss";
import Gallery from "./Gallery";
import Description from "./Description";
export default function Details() {
  return (
    <div className="details__container">
      <div className="title__container">
        <div className="title">
          <span>Louis Vuitton</span>
        </div>
        <div className="subtitle">
          <span>Deauville Cloth Handbag</span>
        </div>
      </div>
      <div className="details__card">
        <Gallery />
        <Description />
      </div>
    </div>
  );
}
