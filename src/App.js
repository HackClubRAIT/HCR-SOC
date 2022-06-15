import React from 'react';
// import ReactDOM from 'react-dom';
import Projects from './Components/Projects';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import 'aos/dist/aos.css';
import PageNotFound from './Components/PageNotFound'
function App() {
    return (
        <div>
        <BrowserRouter>
            <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="/" element={<Home />} />
                <Route path="Projects" element={<Projects />} />
            </Routes>
            <Route path="*" component={PageNotFound} />
          </BrowserRouter>
      {/* <NavBar />
      <Projects/> */}
      </div>
    );
  }
  
  export default App;