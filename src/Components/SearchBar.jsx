import React from 'react'
import searchIcon from "../assets/Icons/searchIcon.png"
import "./SearchBar.css"
const SearchBar = () => {
  return (
    <>
      <div className="container">
        <div className="searchbar">
         <div className="Textfield">
          <img src={searchIcon} alt="" />
          <input type="text" />
         </div>
        </div>
       <button id="search">Search</button>
      </div>
  </>
  )
}

export default SearchBar
