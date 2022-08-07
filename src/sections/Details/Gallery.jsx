import React from 'react'
import img1 from "../../assets/images/Rectangle 355.png";
import img2 from "../../assets/images/Rectangle 354.png";
import img3 from "../../assets/images/Rectangle 353.png";
import img4 from "../../assets/images/Rectangle 352.png";
import img5 from "../../assets/images/Rectangle 351.png";
import img6 from "../../assets/images/Rectangle 350.png";
import bag from "../../assets/images/356.png";
import heart from "../../assets/svgs/heart.svg";
import plane from "../../assets/svgs/paper-plane.svg";
import share from "../../assets/svgs/share.svg";
import bookmark from "../../assets/svgs/bookmark.svg";
import trusted from "../../assets/svgs/trusted.svg";
import badge from "../../assets/svgs/badge.svg";
import cart from "../../assets/svgs/cart.svg";
import location from "../../assets/svgs/Location.svg";
export default function Gallery() {
  return (
    <div className="images__card">
    <div className="details__col">
      {[img1, img2, img3, img4, img5, img6].map((img,i) => (
        <img src={img} key={i} />
      ))}
    </div>
    <div className="details__row">
      <div className="icons">
        <div className="heart__container">
          <img src={heart} alt="" />
        </div>
        <div className="other__icons">
          <img src={plane} alt="" />
          <img src={share} alt="" />
          <img src={bookmark} alt="" />
        </div>
      </div>
      <img src={bag} alt="" className="details__bag" />
    </div>
  </div>
  )
}
