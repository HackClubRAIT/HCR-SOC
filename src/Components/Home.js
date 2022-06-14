import {React} from 'react'
import homepic from '../images/coding.png'
import { Button } from '@mui/material'
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
        <Button variant='contained' color='warning' size={buttonSize} style={{marginRight:"30px"}}>Apply Now</Button>
        <Button variant='outlined' color='warning' size={buttonSize} style={{backgroundColor:"white"}}>Know More</Button>
        </div>
        <img src={homepic} className="homeImg" alt="Coding "/>
        </div>
      <About/>
      <Timeline/>
      <Sponsors/>
      <Contact/>
      <Team/>
      <Faq/>
      <Footer/>

    </>
  )
}

export default Home