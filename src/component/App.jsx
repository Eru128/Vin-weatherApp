import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Calc from './Calc';

function App() {
  return (<>
    <Router basename="/Vin-weatherApp">
      <nav>
        {/* Links to navigate between pages */}
        <Link to="/"></Link>  
        <Link to="/about"></Link>
        <Link to="/calc"></Link>
        
      </nav>

      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element ={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calc" element={<Calc />} />
        
      </Routes>
    </Router>
    
    
    </>
  );
}

export default App;