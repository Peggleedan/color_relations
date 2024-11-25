import { useState } from 'react'
import './css/Availability.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Calendar from './components/Calendar'
import './components/Calendar.css'

const spots = {
	'2024-10-20': 6,
	'2024-10-21': 3,
	'2024-10-22': 8,
  };

function Availability() {
  return (
    <>
    <div className='backgroundContainer'>
    <Navbar></Navbar>
		<h1 className = "pageHeader" id="AvailabilityHeader"></h1>
		<img src = '/Images/availability.jpg' alt = 'Availability' className='AvailabilityBackground'/>
    </div>
	<Calendar spots = {spots}></Calendar>
	<div id = 'AvailabilityInfo'>
		<h1 id = 'AvailabilityInfoHeader'>Ready to Book?</h1>
		<div class="Availability-items"> 
			<div class="Availability-item">
				<h3>Opening hours</h3>
				<p>Monday-Thursday: 09:00-16:30</p>
			</div>
			<div class="Availability-item">
				<h3>Email</h3>
				<p><a href="mailto:support@example.com">support@example.com</a></p>
			</div>
			<div class="Availability-item">
				<h3>Phone</h3>
				<p>+1 (123) 456-7890</p>
			</div>
			<div class="Availability-item">
				<h3>Address</h3>
				<p>123 Business Rd, Suite 456</p>
				<p>City, Country, ZIP Code</p>
			</div>
		</div>
		<div  id = 'mapContainer'>
				<iframe 
					title="map"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.0837021191155!2d18.06075597730848!3d59.33155637461539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5e41c4c39d%3A0xaf362fbc61af2622!2sDrottninggatan%2033%2C%20111%2051%20Stockholm!5e0!3m2!1sen!2sse!4v1720546461102!5m2!1sen!2sse" 
					width="100%" 
					height="100%" 
					loading="lazy" 
					referrerPolicy="no-referrer-when-downgrade">
				</iframe>
		</div>
	</div>
	<Footer/>
    </>
  )
}

export default Availability
