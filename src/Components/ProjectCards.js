import React from 'react'
import { Chip,Button } from '@mui/material'
import '../css/styles.css'
// import { fontWeight } from '@mui/material/node_modules/@mui/system'
// import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const proj_styles={
  name:{
    color:"#de0000",
  },
  tech:{
    backgroundColor:"#4D96FF", 
    color: "#fdfeff", 
    margin:"10px 0px 0px 10px", 
    // marginBottom:'10px',
    fontSize:"0.7em" ,
    // padding:"10px", 
    // height:"30px",
    borderRadius:"15px",
    fontWeight:"bold"
  }
}
export const ProjectCards=(props)=> {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
      <div className='project_card'>
          <h1 style={proj_styles.name}>{props.name}</h1>
          <div>
          {
            props.tech_stack.map(tech=>
          <Chip label={tech.toUpperCase()} sx={proj_styles.tech} size='small'/>)
          }
          </div><br/>
          <p style={{fontSize: 20}}>{props.desc}</p><br/>
          <Button variant="outlined" onClick={handleClickOpen}>
            more details
          </Button>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open} style={{textAlign:"center"}}
          >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
              <b>{props.name}</b>
            </BootstrapDialogTitle>
            <DialogContent dividers>
            <a href={props.repo} target="_blank_" style={{textDecoration:"none"}}>
            <Button variant="contained" startIcon={<GitHubIcon />} color="primary" sx={{color:"white"}}>
              Repository</Button></a>
              <br/><br/>
              <h2>Project Maintainer</h2><hr/><br/>
              <p style={{fontSize:"25px"}}>{props.proj_admin}</p>
              <div className='proj_icons'>
              <a href={props.mentor_mail} style={{color:"grey"}} target="_blank_"><EmailIcon fontSize='large'/></a>
              {/* <a href={props.mentor_github} style={{color:"black"}} target="_blank_"><GitHubIcon fontSize='large'/></a> */}
              <a href={props.mentor_linkedin} style={{color:"#0a66c2"}} target="_blank_"><LinkedInIcon fontSize='large'/></a></div>

            </DialogContent>
          </BootstrapDialog>
            </div>
  )
}

export default ProjectCards