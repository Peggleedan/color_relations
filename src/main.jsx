import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ScrollToTop } from './components/utilities.jsx';
import Home from './Home.jsx';
import Quiz1 from './Quiz1.jsx';
import Quiz2 from './Quiz2.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
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
    <>
    <Navbar></Navbar>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/quiz-1" element={<Quiz1 />} />
          <Route path="/quiz-2" element={<Quiz2 />} />
        </Routes>
    <Footer></Footer>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
