import React from 'react'
// import partCards from './partCa
import PartCards from './PartCards'
import {comm_part} from '../backend/comm_part'
import '../css/comm_partner.css'
function Community() {
  return (
  <div id="comm_partner">
  <h1 className='headings'>Community Partners</h1>
    <div className='comm_partner'>
    {
      comm_part.map((val)=>{
        return <PartCards name={val.name} desig={val.desig} linkedin={val.linkedin} images={val.images}/>
      
      })
    }
    </div></div>
    
  )
}

export default Community