import React from 'react'
import location from "../../assets/svgs/Location.svg";
import heart from "../../assets/svgs/heart.svg";
import bookmark from "../../assets/svgs/bookmark.svg";
import pin from "../../assets/svgs/pin.svg"
export default function Product({image,title,subtitle,price,location}) {
  return (
    <div className="product__card">
    <div className="product_image">
      <img src={image} alt="watch" />
    </div>
    <div className="product__icons">
      <img src={heart} alt="heart icon" />{" "}
      <img src={bookmark} alt="bookmark icon" />
    </div>
    <div className="product__title">{title}</div>
    <div className="product__subtitle">{subtitle}</div>
    <div className="product__price">{price}USD</div>
    <div className="product__location">
      <img src={pin} alt="location__icon" />{location}
    </div>
  </div>
  )
}
