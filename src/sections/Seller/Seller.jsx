import React from 'react'
import trusted from "../../assets/svgs/trusted.svg";
import stars from "../../assets/svgs/stars.svg";
export default function Seller({ username }) {
    return (
      <div className="seller__component__sm">
        <div className="seller__img__container__sm">
          <div className="seller__img__sm"></div>
          <div className="seller__details__sm">
            <div className="seller__username">
              <span>@{username}</span>
            </div>
            <img src={stars} alt="stars" />
          </div>
        </div>
      </div>
    );
  }