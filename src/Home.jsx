import './css/Home.css'
import { Link, useNavigate  } from 'react-router-dom';
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function Home() {
	const navigate = useNavigate();

	const toPrices = () => {
		navigate('/prices');
	}

  return (
    <>
	<div className='videoContainer'>
	<Navbar></Navbar>
	<video autoPlay loop muted className='videoBackground' id = 'normal-background'>
		<source src="/Videos/Surfing.mp4" type="video/mp4"/>
		Your browser does not support the video tag.
	</video>
	<img src = '/Images/about.jpeg' alt = 'mobile-background' id = 'mobile-background' className='videoBackground'/>
	<h1 className = "pageHeader"> EXPERIENCE SURFING IN TUNISIA</h1>
	</div>
	<div className="pageContent">
	<h1>SURF WITH US</h1>
	<p className="introduction" >Surfing is a surface water sport in which an individual, a surfer, uses a board 
		to ride on the forward section, or face, of a moving wave of water, which usually 
		carries the surfer towards the shore. Waves suitable for surfing are primarily found in 
		the ocean, but can also be found in lakes or rivers in the form of a standing wave or tidal bore.
	</p>
        <div className='images'>
        	<img src="/Images/surf1.jpg" alt="Surfing" className="surfImages"/>
			<img src="/Images/surf2.jpg" alt="Surfing" className="surfImages"/>
			<img src="/Images/surf3.jpg" alt="Surfing" className="surfImages"/>
			<img src="/Images/surf4.jpg" alt="Surfing" className="surfImages"/>
        </div>
		<Link to="/about" className="aboutLink">Learn more about us</Link>
        <h1>OUR SERVICES</h1>
		<div className='services'>
			<div>
				<h2>Private Session</h2>
				<p className="sessiontext" >Our private surfing sessions offer the perfect opportunity 
					for surfers of all levels to receive individualized attention and tailor-made instruction. 
					Whether you're a beginner looking to catch your first wave or an experienced surfer aiming to
					 refine your technique, our expert instructors will work with you one-on-one to achieve your personal surfing goals.
				</p>
			</div>
			<div className='private' onClick = {toPrices}>
				<img src="/Images/private.jpg" alt="Private Session" className="private-img"/>
				{
					// <div className="image-text">Private</div> 
				}	
				<a className='booking-text'>More info</a>
			</div>
			<div className='group' onClick = {toPrices}>
				<img src="/Images/group.jpg" alt="Group Session" className="group-img" />
				{
					//<div className="image-text">Group</div>
				}
				<a className='booking-text'>More info</a>
			</div>
			<div>
				<h2>Group Session</h2>
				<p className="sessiontext" >Group surfing sessions are an excellent way to enjoy the thrill 
					of surfing with friends, family, or fellow surf enthusiasts. These sessions are perfect
					 for creating lasting memories, building camaraderie, and experiencing the excitement of 
					 surfing in a fun, supportive group setting.
				</p>
			</div>
        </div>
      </div>
	<Footer/>
    </>
  )
}

export default Home
