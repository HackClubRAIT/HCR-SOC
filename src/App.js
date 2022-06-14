import React from 'react';
import Projects from './Components/Projects';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';

// import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
    return (
        <div>
        <BrowserRouter>
            <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="/" element={<Home />} />
                <Route path="Projects" element={<Projects />} />
    
            </Routes>
          </BrowserRouter>
      {/* <NavBar />
      <Projects/> */}
      </div>
    );
  }
  
  export default App;