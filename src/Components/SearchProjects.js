import React, { useState } from 'react'
import {proj} from '../backend/projects'
import ProjectCards from './ProjectCards'
function SearchProjects() {
     
    const [searchProj,setsearchProj]=useState('')
    // const searchproj=e=>{
    //       setsearchProj(e.target.value)
    // };
    
    return (
    <div>
        <div className="searchBar">
        <input type="search" className="search" onChange={e=>setsearchProj(e.target.value)} placeholder="Search for projects or tech stack "/>
        </div>
        <div className='projects'>
        {
            proj.filter((val)=>{
                
                //convert json tech stack to lowercase
                const lower = val.tech_stack.map((val)=>val.toLowerCase());
                //check if input is equal to lower
                const check=lower.map((val)=>val.includes(searchProj.toLowerCase()));
                if(searchProj === ""){
                    return val
                }
                else if(val.name.split("/")[1].toLowerCase().includes(searchProj.toLowerCase()))
                {
                    return val;
                }
                else if(check.includes(true)){
                    return val;
                }
                return 0;
            }).map((val,key)=>{
                return <ProjectCards name={val.name} tech_stack={val.tech_stack} desc={val.desc}/>
            })
        }
        </div>
        
    </div>
  )
}

export default SearchProjects