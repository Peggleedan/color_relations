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
		<source src="/Videos/panda.mp4" type="video/mp4"/>
		Your browser does not support the video tag.
	</video>
	</div>
	<Footer/>
    </>
  )
}

export default Home
