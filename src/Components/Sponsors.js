import React from 'react'
import '../css/sponsors.css'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Community from './Community';
const sponsors=[
  { 
    title:'Title Sponsor',  
    icon:"title.png",
    img:"Logo.png",
    link:'https://www.geeksforgeeks.org/'
  },
  { 
    title:'In-Kind Sponsor',
    icon:'handshake.png',
    img:"InterviewBuddy.png",
    link:'https://interviewbuddy.in/'
  },
  { 
    title:'Certificate Sponsor',  
    icon:"certificate.png",
    img:"certopus_original.png",
    link:'https://certopus.com/'
  },
  { 
    title:'Domain Sponsor',  
    icon:"domain.png",
    img:"xyz-logo-color.png",
    link:'https://gen.xyz/'
  }
  
]
function Sponsors() {
  return (
    <div id="Sponsors" style={{paddingTop:"10vh"}}>
      <div className="spons_section">
      <h1 className='headings'>Sponsors</h1>
      <Grid container spacing={5}>
      {
      sponsors.map((val)=>{
        return <>
          {/* <div className='sponsor'> */}
          <Grid item xs={12} md={4} className="spons_grid">
          <div className='spons_title'>
          <img src={require(`../images/${val.icon}`)} className="spons_icon" alt="icon"/>
            <p>{val.title}</p>
          </div>
        
        </Grid >
        <Grid item xs={12} md={8} className="spons_grid">
          <div className='spons_img'><a href={val.link} target="_blank_"><img className='sp_image' src={require(`../images/sponsors/${val.img}`)} alt="sponsors"/></a></div>
        {/* </div> */}
        </Grid>
        </>

        
        })
      }
        </Grid>
        <Community/>


      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 4">
          
        </Box>
        <Box gridColumn="span 8">
        </Box>
      </Box>
      </div>  
    </div>
  )
}

export default Sponsors