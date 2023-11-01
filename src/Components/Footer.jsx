import React from 'react'
import moreLinks from '../Data/moreLinks.json'
import "./Footer.css"
export default function Footer() {
  return (
    <div className='footer'>
      <div className="footerCard">
        <h2>BRAND NAME</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consequatur iure facilis amet unde ipsum qui modi vel, odit necessitatibus.</p>
        <p id="address">121 King Street, Melbourne 3000</p>
        <p id="contact">+12 3 0000 0000</p>
        <p id="mail">contact@brandemail.com</p>
        <div className="links">
          <img src="../src/assets/Icons/facebook.png" alt="" />
          <img src="../src/assets/Icons/twitter.png" alt="" />
          <img src="../src/assets/Icons/insta.png" alt="" />
          <img src="../src/assets/Icons/youtbe.png" alt="" />
        </div>
      </div>
      <div className="footerCard">
        <h2>SHOPPING</h2>
        <ul>
        <li>Your cart</li>
        <li>Your orders</li>
        <li>Compared items</li>
        <li>Whishlist items</li>
        <li>Shipping detail</li>
        </ul>  
    
      </div>
      <div className="footerCard">
        <h2>MORE LINKS</h2>
        <ul>
          {moreLinks.map((element) => (
            <li>{element.link}</li>
          ))}
        </ul>
      </div>
      <div className="footerCard">
        <h2>PROMO UPDATE</h2>
        <div className="update">
          <h2>14 <span>MAY</span></h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <h3>3 comments</h3>
        </div>
        <hr/>
        <div className="update">
        <h2>15 <span>JULY</span></h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <h3>3 comments</h3>
        </div>
      </div>
    </div>
  )
}
