import { useState } from 'react'
import './css/Prices.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function Prices() {

  return (
    <>
    <div className='videoContainer'>
		<Navbar></Navbar>
        <h1 className = "pageHeader" id="priceHeader">PRICES</h1>
        <img src = '/Images/prices.jpg' alt = 'prices' className='videoBackground'/>
    </div>
	<Footer/>
    </>
  )
}

export default Prices
