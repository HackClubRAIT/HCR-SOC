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
            proj.filter((val,key)=>{
                
                //convert json tech stack to lowercase
                const lower = val.tech_stack.map((val)=>val.toLowerCase());
                //check if input is equal to lower
                const check=lower.map((val)=>val.includes(searchProj.toLowerCase()));
                if(searchProj === ""){
                    return val
                }
                else if(val.name.toLowerCase().includes(searchProj.toLowerCase()))
                {
                    return val;
                }
                else if(check.includes(true)){
                    return val;
                }
                return 0;
            }).map((val,key)=>{
                return <ProjectCards 
                name={val.name} 
                tech_stack={val.tech_stack} 
                desc={val.desc} 
                repo={val.repo} 
                proj_admin={val.proj_admin} 
                mentor_mail={val.mentor_mail}
                mentor_linkedin={val.mentor_linkedin}
                mentor_github={val.mentor_github}
                />
            })
        }
        </div>
        
    </div>
  )
}

export default SearchProjects