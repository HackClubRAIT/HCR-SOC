import React from 'react'
import TeamCards from './TeamCards'
import {team} from '../backend/team'
import '../css/team.css'
function Team() {
  return (
  <div id="Team">
  <h1 className='headings'>Team</h1>
    <div className='team'>
    {
      team.map((val)=>{
        return <TeamCards name={val.name} desig={val.desig} linkedin={val.linkedin} github={val.github} images={val.images}/>
      
      })
    }
    </div></div>
    
  )
}

export default Team