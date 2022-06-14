import React from 'react'
import SearchProjects from './SearchProjects'
import {Link,Outlet} from 'react-router-dom';
// import NavBar from './Navbar'
import logo from '../images/hackclubrait-logo.png'
import './NavBar.css'
import { AppBar, Container, Button } from '@mui/material'
import Box from '@mui/material/Box';
export const Projects=()=> {
  return (
    <div style={{ paddingTop:"10vh"}}>
     <AppBar position="fixed" >
      <Container maxWidth="xl" className="navbar sticky" style={{display:"flex"}}>
      <img sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} src={logo} style={{width:"50px", margin:"10px 0px"}} alt="logo"/>
      <Box sx={{ flexGrow: 1, display: 'flex' }} style={{justifyContent:"end"}}>         
        <div className='navbar' style={{padding:"10px"}}>
        <Link to="/Home" className='link' style={{textDecoration:"none"}}>
          <Button color="primary" variant='contained'> Home</Button>
          </Link>
        </div>
        </Box>

      </Container>
      </AppBar>
        <h1 className='headings'>Projects</h1>
        <SearchProjects/>
        <Outlet/>
    </div>

        
  )
}

export default Projects