import React from 'react'
import "./Navbar.css"
import brandLogo from "../assets/icons/brandLogo.png"
import profileIcon from "../assets/icons/profile.png"
import cartIcon from "../assets/icons/cart.png"
const Navbar = () => {
  return (
    <>
      <div className="main">
        <div className="logo">
        <img src={brandLogo} alt="" />
        </div>
        <div className="icons">
        <img src={profileIcon} alt="" />
        <img src={cartIcon} alt="" />
        </div>
      </div>
      <div className="lowerNav">
        <ul>
        <li>HOME</li>
        <li>STORE</li>
        <li>ACCESSORIES</li>
        <li>BRAND</li>
        <li>PAGES</li>
        <li>ABOUT US</li>
        <li>NEWS</li>
        <li>CONTACT US</li>
        </ul>
       </div>
    </>
  )
}

export default Navbar
