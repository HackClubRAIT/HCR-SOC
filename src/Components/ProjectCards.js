import React from 'react'
import { Chip } from '@mui/material'
import '../styles.css'
import { fontWeight } from '@mui/material/node_modules/@mui/system'
const proj_styles={
  name:{
    color:"#de0000",
  },
  tech:{
    backgroundColor:"#4D96FF", 
    color: "#fdfeff", 
    marginRight:"15px", 
    marginBottom:'10px',
    size:"medium", 
    fontSize:"1rem" ,
    // padding:"10px", 
    // height:"30px",
    borderRadius:"15px",
    fontWeight:"bold"
  }
}
export const ProjectCards=(props)=> {
  return (
      <div className='project_card'>
          <h1 style={proj_styles.name}>{props.name.split("/")[1]}</h1>
          <div>
          {
            props.tech_stack.map(tech=>
          <Chip label={tech.toUpperCase()} sx={proj_styles.tech}/>)
          }
          </div>
          <p style={{fontSize: 25}}>{props.desc}</p>
      </div>
  )
}

export default ProjectCards