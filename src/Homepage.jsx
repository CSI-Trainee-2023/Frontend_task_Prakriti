import React from 'react'
import Navbar from "./Components/Navbar"
import SearchBar from "./Components/SearchBar"
import Horizontalcard from "./Components/Horizontalcard"
import Verticalcard from "./Components/Verticalcard"
import Topratingcard from "./Components/Topratingcard"
import Footer from "./Components/Footer"
const Homepage = () => {
  return (
    <>
      <Navbar />
      <SearchBar />  
      <div className="horizontalCardHolder">
                <Horizontalcard image="../src/assets/Products/vintageChair.png" title="VINTAGE CHAIR" />
                <Horizontalcard image="../src/assets/Products/vase.png" title="LARGE TERRACOTA VASE" />
            </div>
      <div className="verticalCardHolder">
                <Verticalcard image="../src/assets/Products/towel.png" title="Linen Beach Towel" />
                <Verticalcard image="../src/assets/Products/juteMat.png" title="Round Jute Placemat" />
                <Verticalcard image="../src/assets/Products/squareBox.png" title="Square Clear Glass Box" />
                <Verticalcard image="../src/assets/Products/ceramicPlates.png" title="Small Ceramic Plates" />
                <Verticalcard image="../src/assets/Products/glassBox.png" title="Large Clear Glass Box " />
                <Verticalcard image="../src/assets/Products/juteMat.png" title="Round Jute Placemat" />
                <Verticalcard image="../src/assets/Products/metalBasket.png" title="Metal Wire Basket" />
                <Verticalcard image="../src/assets/Products/towel.png" title="Boho Chic" />
        </div> 
        <div className="topRatingCardHolder">
                <Topratingcard image="../src/assets/Products/tray.png" title="Tray with Foot" />
                <Topratingcard image="../src/assets/Products/cushion.png" title="Twill Seat Cushion " />
                <Topratingcard image="../src/assets/Products/beverageGlass.png" title="Fluted Beverage Glass" />
                <Topratingcard image="../src/assets/Products/eggCup.png" title="Ceramic Egg Cup" />
                <Topratingcard image="../src/assets/Products/bambooBox.png" title="Small Bamboo Box  " />
                <Topratingcard image="../src/assets/Products/cutleryBasket.png" title="Metal Cutlery Basket" />
                <Topratingcard image="../src/assets/Products/napkins.png" title="2-pack Linen Napkins" />
                <Topratingcard image="../src/assets/Products/ceramicCups.png" title="4-pack Ceramic Cups" />
                <Topratingcard image="../src/assets/Products/stonewareplate.png" title="Glazed Stoneware Plate" />
        </div>


          
        <div className="promotion">
                <div className="newsletter">
                    <h2>SIGN UP FOR OUR NEWSLETTER</h2>
                    <h3>Subscribe for the latest deals and promotions</h3>
                </div>
                <div className="emailInputField">
                    <input type="email" id="emailInput" />
                    <img src="../src/assets/Icons/email.png" alt="" />
                </div>
         </div>
       <Footer />  
  
    </>
  )
}

export default Homepage
