import React from 'react'
import SearchProjects from './SearchProjects'
import {Link,Outlet} from 'react-router-dom';
// import NavBar from './Navbar'
import './NavBar.css'
import { AppBar, Container, Button } from '@mui/material'
export const Projects=()=> {
  return (
    <>
     <AppBar position="static" >
      <Container maxWidth="xl" className="navbar sticky"></Container>
        <div className='navbar' style={{padding:"10px"}}>
        <Link to="/Home" className='link' style={{textDecoration:"none"}}>
          <Button color="primary" variant='contained'> Home</Button>
          </Link>
      
        </div>
      </AppBar>
        <h1 className='headings'>Projects</h1>
        <SearchProjects/>
        <Outlet/>
    </>

        
  )
}

export default Projects