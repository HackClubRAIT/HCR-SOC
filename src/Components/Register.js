import { Button, Card, Divider } from '@mui/material'
import React from 'react'
import '../css/register.css'
function Register() {
  return (
    <div style={{paddingTop:"10vh"}}  id="Register">
    <h1 className='headings'>Register</h1>
        <div className='register'>
            <Card variant='outlined' className='reg_card'>
                <h1>Participant</h1><br/>
                <Divider/><br/>
                <p style={{fontSize:"30px"}}>If you want to contribute to the opensource of some amazing projects, then register here</p><br/>
                <a href="https://forms.gle/mhfhZzh7cySuGakH7" target="_blank_" style={{textDecoration:"none"}}>
                    <Button variant='contained' color='primary'> Register here</Button>
                </a>
            </Card>
            <Card variant='outlined' className='reg_card'>
                <h1>Project Maintainer</h1><br/>
                <Divider/><br/>
                <p style={{fontSize:"30px"}}>If you have some amazing projects which you want to open-source, then register here</p><br/>
                <a href="https://forms.gle/mhfhZzh7cySuGakH7" style={{textDecoration:"none"}} target="_blank_">
                <Button variant='contained' color='primary'> Register here</Button>
                </a>
            </Card>        
        </div>
    </div>
  )
}

export default Register