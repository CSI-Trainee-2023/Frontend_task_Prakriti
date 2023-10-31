import React from 'react'
import "./Horizontalcard.css"
export default function HorizontalCard(props) {
  return (
    <div className='horizontalCard'>
      <img src={props.image} alt="" />
      <div className="cardContent">
        <h2>{props.title}</h2>
        <button>View Details</button>
      </div>
    </div>
  )
}


