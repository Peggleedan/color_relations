import './css/Home.css'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { Link, useNavigate  } from 'react-router-dom';

function Home() {

  return (
    <>
    <Navbar></Navbar>
	
	<h1 className='home-header'>Hover on card for more information</h1>
	<div class='home-container'>
	<div class="card-container">
        <div class="card">
            <div class="card-front">
                <h2>Hover me!</h2>
            </div>
            <div class="card-back">
                <h2>Some information that is shown when you hover the card.</h2>
            </div>
        </div>
		<div class="card">
            <div class="card-front">
                <h2>Hover me!</h2>
            </div>
            <div class="card-back">
                <h2>Some information that is shown when you hover the card.</h2>
            </div>
        </div>
    </div>
	</div>
    <div class="link-container">
        <Link to="/quiz-1" className="">Quiz 1</Link>
        <Link to="/quiz-2" className="">Quiz 2</Link>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Home
