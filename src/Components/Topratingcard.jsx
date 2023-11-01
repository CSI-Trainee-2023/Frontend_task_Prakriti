import React from 'react'
import "./Topratingcard.css"
export default function Topratingcard(props) {
  return (
    <div className='topRatingCard'>
      <img src={props.image} alt="image" />
      <div className="topRatingCardPrice">
          <h2>{props.title}</h2>
      </div>
    </div>

  )
}

