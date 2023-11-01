import React from 'react'
import "./Verticalcard.css"
export default function Verticalcard(props) {
  return (
    <div className="verticalCardMain">
    <div className='verticalCard'>
      <img src={props.image} alt="" />
      <div className="cardContent">
        <h3>{props.title}</h3>
        <h2>30$</h2>
      </div>
      </div>
    </div>

  )
}

