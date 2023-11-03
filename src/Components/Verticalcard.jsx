import React from 'react'
import "./Verticalcard.css"


export default function Verticalcard(props) {
  
  return (
    <>
    <div className="verticalCardSection">
    <div className='verticalCard'>
      <img src={props.image} alt="" />
        <h3>{props.title}</h3>
        <h2>30$</h2>
      </div>
    </div>
    <div className="hoverBox">
        <img src={props.image} alt="" />
        <div className="hoverContent">
        <h1>DECOR</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur sint officia voluptatibus quos odio doloremque aut vel, magni sapiente expedita.</p>
        
        </div>
    </div>


    </>
  ) 
}


