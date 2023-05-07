import React from 'react'
import "./thq.css"
import logo from '../../images/logoRed.png'
const ThankYou = () => {
  return (
    <div className='thq'>
    <img src={logo} alt="About image" style={{width: "15%"}} />
      <h1 className='h11'>Thank you for registering in <span>Health Line.</span></h1>
    </div>
  )
}

export default ThankYou
