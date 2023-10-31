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
        <a>HOME</a>
        <a>STORE</a>
        <a>ACCESSORIES</a>
        <a>BRAND</a>
        <a>PAGES</a>
        <a>ABOUT US</a>
        <a>NEWS</a>
        <a>CONTACT US</a>
       
       </div>
    </>
  )
}

export default Navbar