import React from 'react'
import trusted from "../../assets/svgs/trusted.svg";
import badge from "../../assets/svgs/badge.svg";
import cart from "../../assets/svgs/cart.svg";
import location from "../../assets/svgs/Location.svg";
export default function Description() {
  return (
    <div className="inner__details">
    <div className="prices">
      <span className="oldprice">$2,100</span>
      <span className="newprice">$1,900</span>
      <span className="discount">-70%</span>
    </div>
    <div className="trusted">
      <img src={trusted} alt="trusted" />
    </div>
    <div className="estimated">
      <span>Estimated retail price $2,000</span>
    </div>
    <div className="auth">
      <img src={badge} alt="badge" />
      <div className="auth__text">
        <span>+15 USD Control and authentication</span>
        <br />
        <span>Physical control and authentication</span>
        <br />
        <span>by our experts. </span>
        <span className="learn">Learn more</span>
        <br />
      </div>
    </div>
    <div className="condition">
      <span>Good Condition</span>
      <br />
      <span>Brown Leather</span>
      <br />
      <span>Classic LV leather, no scratches</span>
    </div>
    <div className="order__btn">
      <button>Order</button>
    </div>
    <div className="btns">
      <div className="request__btn">
        <button>Request to View</button>
      </div>
      <div className="offer__btn">
        <button>Make an Offer</button>
      </div>
      <div className="cart__btn">
        <button>
          <img src={cart} alt="cart" />
        </button>
      </div>
    </div>
    <div className="location">
      <img src={location} alt="location" />
      <span>Beirut, Lebanon</span>
    </div>
  </div>
  )
}
