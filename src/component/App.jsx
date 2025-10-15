import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Calc from './Calc';
import Timer from './Timer'

function App() {
  return (<>
    <Router basename="/Vin-weatherApp">
      <nav>
        {/* Links to navigate between pages */}
        <Link to="/"></Link>  
        <Link to="/about"></Link>
        <Link to="/calc"></Link>
        <Link to= '/timer'></Link>
      </nav>

      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element ={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calc" element={<Calc />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </Router>
    
    
    </>
  );
}

export default App;