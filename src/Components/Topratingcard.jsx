import React from 'react'
import "./Topratingcard.css"
import topRating from '../Data/topRatingCards.json'
export default function Topratingcard(props) {
  return (
    <>
    <div className='topRatingCard'>
      <img src={props.image} alt="image" />
      <div className="priceTopRating">
        <h3>{props.title1}</h3>
        <h2>{props.title2}</h2>
      </div>
    </div>
    
    <div className="topRating">
                <h2>Top Rating</h2>
                <div className="topRatingHolder">
                    {topRating.map((element,id) => (
                        <Topratingcard image={`../src/assets/Products/${element.id}`} title1={element.desc} title2={element.price} key={id}/>
                    ))}
                </div>
            </div>
    </>
  )
}


