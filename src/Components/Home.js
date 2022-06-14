import {React} from 'react'
import homepic from '../images/coding.png'
import { Button } from '@mui/material'
import { Link as LinkScroll} from 'react-scroll';
import NavBar from './Navbar'
import '../css/home.css'
import Timeline from './Timeline'
import Footer from './Footer'
import useMediaQuery from '@mui/material/useMediaQuery'
import About from './About'
import Sponsors from './Sponsors'
import Faq from './Faq'
import Contact from './Contact'
import Team from './Team'
import Register from './Register';
function Home() {
  const mobile=useMediaQuery('(max-width:650px)')
  let buttonSize;
  if(mobile){
    buttonSize='small'
  }
  else{
      buttonSize='large'
  }
  return (
    <>
    <NavBar/>
        <div className='homeback'  >
          <div style={{paddingLeft:"8vw"}}>
        <h5 className='homeheading'>HackClubRAIT's</h5><h1 className='homeheading1'>{"<Summer of code/>"}</h1>
        <Button variant='contained' color='warning' size={buttonSize} style={{marginRight:"30px"}}><LinkScroll activeClass="active" smooth spy to="Register">
                Apply Now
              </LinkScroll></Button>
        <Button variant='outlined' color='warning' size={buttonSize} style={{backgroundColor:"white"}}><LinkScroll activeClass="active" smooth spy to="About">
                Know More
              </LinkScroll></Button>
        </div>
        <img src={homepic} className="homeImg" alt="Coding "/>
        </div>
      {/* <About/> */}
      <Register/>
      <Timeline/>
      <Sponsors/>
      <Team/>
      <Faq/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default Home