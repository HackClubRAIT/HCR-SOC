import React from 'react'
// import {Paper } from '@mui/material'
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import GitHubIcon from '@mui/icons-material/GitHub';
function PartCards(props) {
  return (
    <div className='partCards'>
      {/* <Paper className='partPaper'> */}
        <div>
        <a className="comm_img" href={props.linkedin} target="_blank_"><img style={{width:"250px",height:"auto"}} src={require(`../images/comm partner/${props.images}`)} alt="partner images"/></a> 
        </div>
        {/* </Paper> */}
    </div>
  )
}

export default PartCards