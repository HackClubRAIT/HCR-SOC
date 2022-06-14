import React from 'react'
import {Paper } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
function TeamCards(props) {
  return (
    <div className='teamCards'>
      <Paper className='teamPaper'>
        <div>
        <img style={{width:"auto",height:"200px"}} src={require(`../images/Team/${props.images}`)} alt="team images"/>
        </div>
        <span className='circle1'></span>
        <h2>{props.name}</h2>
        <p>{props.desig}</p>
        <div className="IconDiv">
          <div className='ldiv'><a className="linkedin" href={props.linkedin}><LinkedInIcon/></a></div>
          <div className='gdiv'><a className="github" href={props.github}><GitHubIcon/></a></div>
          {/* <div className='tdiv'><a className="twitter" href="#"><TwitterIcon/></a></div> */}
        </div>
      </Paper>
    </div>
  )
}

export default TeamCards