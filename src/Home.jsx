import './css/Home.css'
import { Link, useNavigate  } from 'react-router-dom';

function Home() {

  return (
    <>
	
	<h1 className='home-header'>Hover on card for more information</h1>
	<div class='home-container'>
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
    </div>
	</div>
    <div class="link-container">
        <Link to="/quiz-1" className="">Quiz 1</Link>
        <Link to="/quiz-2" className="">Quiz 2</Link>
    </div>
    </>
  )
}

export default Home
