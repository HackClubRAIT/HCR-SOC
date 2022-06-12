import React from 'react'
import SearchProjects from './SearchProjects'
import {Link,Outlet} from 'react-router-dom';
import NavBar from './Navbar'
export const Projects=()=> {
  return (
    <>
        <NavBar/>
        <h1 className='headings'>Projects</h1>
        <SearchProjects/>
    </>
        
  )
}

export default Projects