import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ScrollToTop } from './components/utilities.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Prices from './Prices.jsx';
import Availability from './Availability.jsx';
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
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/contact" element={<Availability />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);