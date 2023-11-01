import React from 'react'
import "./Navbar.css"
import brandLogo from "../assets/icons/brandLogo.png"

const Navbar = () => {
  return (
    <>
      <div className="main">
        <div className="logo">
        <img src={brandLogo} alt="" />
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
