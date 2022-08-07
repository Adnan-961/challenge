import React from "react";
import trusted from "../../assets/svgs/trusted.svg";
import stars from "../../assets/svgs/stars.svg";
import Seller from "./Seller";
export default function SellerSection() {
  return (
    <div className="seller__section">
      <h1>Seller</h1>
      <div className="seller__component">
        <div className="seller__img__container">
          <div className="seller__img"></div>
          <div className="seller__details">
            <div className="trusted__Seller">
              <img src={trusted} alt="trusted" />
            </div>
            <div className="seller__username">
              <span>@username0000012222</span>
            </div>
          </div>
        </div>
        <div className="seller__btns">
          <button className="unfollow">Unfollow</button>{" "}
          <button className="contact__btn">Contact</button>
        </div>
      </div>
      <h1 className="reviews">Seller Reviews</h1>
      <Seller username={"username00123"} />
      <Seller username={"username001234"} />
      <div className="seller__link">
        <a href="#">See More</a>
      </div>
      <div className="seller__comment">
        <div className="comment__container">
          <h4>Leave a comment for the seller</h4>
          <textarea
            name=""
            id=""
            cols="30"
            rows="2"
            placeholder="Type here..."
          />
          <div className="comment__btn">
            <button>Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
