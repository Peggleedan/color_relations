import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ScrollToTop } from './components/utilities.jsx';
import Home from './Home.jsx';
import Quiz1 from './Quiz1.jsx';
import Quiz2 from './Quiz2.jsx';
import Consent from './Consent.jsx';
import './index.css';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Main />
    </Router>
  );
};

const Main = () => {
  let location = useLocation();

  return (
	<Routes location={location}>
		<Route path="/" element={<Consent />} />
		<Route path="/Home" element={<Home />} />
		<Route path="/quiz-1" element={<Quiz1 />} />
		<Route path="/quiz-2" element={<Quiz2 />} />
	</Routes>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
