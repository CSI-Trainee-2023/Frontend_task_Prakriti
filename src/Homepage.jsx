import React from 'react'
import Navbar from "./Components/Navbar"
import SearchBar from "./Components/SearchBar"
import Horizontalcard from "./Components/Horizontalcard"


const Homepage = () => {
  return (
    <>
      <Navbar />
      <SearchBar />  
      <div className="horizontalCardHolder">
                <Horizontalcard image="../src/assets/Products/Vintagechair.png" title="INY VINTAGE CHAIR" />
                <Horizontalcard image="../src/assets/Products/vase.png" title="LARGE TERRACOTA VASE" />
            </div>
      <div className="verticalCardHolder" id='store'>
                {verticalImages.map((element,id) => (
                    <VerticalCard image={`../src/assets/items/${element.id}`} title1={element.desc} title2={element.price} details={element.details} list={verticalImages} key={id}/>
                ))}
            </div>     
    </>
  )
}

export default Homepage
