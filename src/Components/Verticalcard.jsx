import React from 'react'
import "./Verticalcard.css"


export default function Verticalcard(props) {
  
  return (
    <div className="verticalCardSection">
    <div className='verticalCard'>
      <img src={props.image} alt="" />
        <h3>{props.title}</h3>
        <h2>30$</h2>
      </div>
    </div>

  ) 
}


