import React from 'react';
import ReactDOM from 'react-dom';
import Projects from './Components/Projects';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About'
import Contact from './Components/Contact'
import Timeline from './Components/Timeline'
import Sponsors from './Components/Sponsors'
import Faq from './Components/Faq'
import AOS from 'aos';
import 'aos/dist/aos.css';
ReactDOM.render(
  
  <div>
    <BrowserRouter>
        <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="/" element={<Home />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="About" element={<About/>} />
            <Route path="Contact us" element={<Contact />} />
            <Route path="Timeline" element={<Timeline />} />
            <Route path="Sponsors" element={<Sponsors />} />
            <Route path="FAQ" element={<Faq />} />
            <Route index element={<Home />} />

        </Routes>
      </BrowserRouter>

  {/* <NavBar />
  <Projects/> */}
      
  </div>
  ,
  document.getElementById('root')
);


