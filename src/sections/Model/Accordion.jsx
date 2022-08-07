import React, { useState } from "react";
import shield from "../../assets/svgs/shield-shaded.svg";
import arrow from "../../assets/svgs/arrow.svg";
export default function Accordion({ name, image }) {
  const [turn, setTurn] = useState("");

  return (
    <div className="accordion__container">
      <div className="accordion__details">
        <div className="accordion__image">
          <img src={image} alt="shield" />
        </div>
        <div className="Accordion__title">
          <span>{name}</span>
        </div>
      </div>
      <div className="accordion__arrow">
        <img
          src={arrow}
          alt="arrow"
          width={"15px"}
          className={turn ? "turn90" : ""}
          onClick={() => {
            setTurn(!turn);
          }}
        />
      </div>
    </div>
  );
}
