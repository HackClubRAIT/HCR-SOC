import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom';
import Projects from './Components/Projects';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import 'aos/dist/aos.css';
import PageNotFound from './Components/PageNotFound'
ReactDOM.render(
  <React.StrictMode>
    <div>
        <BrowserRouter>
            <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="/" element={<Home />} />
                <Route path="Projects" element={<Projects />} />
            <Route path="*" component={PageNotFound} />

            </Routes>
          </BrowserRouter>
      {/* <NavBar />
      <Projects/> */}
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);


