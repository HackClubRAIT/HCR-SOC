import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import '../css/contact.css'
function Contact() {
  return (
    <>
    <div style={{paddingTop:"5vh"}} id="Contact Us">
    <h1 className='headings'>Contact</h1>
    <div className='contact'>
      <div className='cgmail'>
        <a href="mailto:hackclubraitsoc@gmail.com" className='gm' target="_blank_"><MailIcon sx={{fontSize:100 }}/></a>
      </div>
      <div className='cinsta'>
      <a href="https://www.instagram.com/hackclubrait/" className='in' target="_blank_"><InstagramIcon sx={{fontSize:100}}/></a>
      </div>
      <div className='clinkedin'>
      <a href="https://www.linkedin.com/company/hack-club-rait/mycompany/" className='li' target="_blank_"><LinkedInIcon sx={{fontSize:100}}/></a>
      </div>
      <div className='cgithub'>
      <a href="https://github.com/HackClubRAIT" className='gi' target="_blank_"><GitHubIcon sx={{fontSize:100}}/></a>
      </div>
      <div className='ctwitter'>
      <a href="https://twitter.com/RaitHackclub" className='tw' target="_blank_"><TwitterIcon sx={{fontSize:100}}/></a>

      </div>
      </div>

    </div>
    </>
  )
}

export default Contact