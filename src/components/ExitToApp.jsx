import React from 'react'
import thanksCard from "./images/thank-you-placard.avif";

function ExitToApp() {
  return (
    <div style={{ 
    color:"blue",  
    textAlign:"center"}}>
        <h1>Thank You For Visiting</h1>
        <img src={thanksCard} alt="Thank You" height="400px"  />
        <img src=''/> 
    </div>
  )
}

export default ExitToApp