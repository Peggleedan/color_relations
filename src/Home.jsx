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
	<Navbar></Navbar>
	<h1>Hover on card for more information</h1>
	<div class='main-container'>
	<div class="card-container">
        <div class="card">
            <div class="card-front">
				<h2>Front Side</h2>
            </div>
            <div class="card-back">
                <h2>Back Side</h2>
            </div>
        </div>
		<div class="card">
            <div class="card-front">
				<h2>Front Side</h2>
            </div>
            <div class="card-back">
                <h2>Back Side</h2>
            </div>
        </div>
		<div class="card">
            <div class="card-front">
				<h2>Front Side</h2>
            </div>
            <div class="card-back">
                <h2>Back Side</h2>
            </div>
        </div>
		<div class="card">
            <div class="card-front">
                <h2>Front Side</h2>
            </div>
            <div class="card-back">
                <h2>Back Side</h2>
            </div>
        </div>
    </div>
	</div>
	<Footer/>
    </>
  )
}

export default Home
