import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../images/hackclubrait-logo.png'
// import AdbIcon from '@mui/icons-material/Adb';
import {Link,Outlet} from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';
import './NavBar.css';

const pages = ['About','Register','Timeline',"Sponsors",'Team','FAQ', 'Contact Us'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

  return (
    <AppBar position="fixed" >
      <Container maxWidth="xl" className="navbar sticky">
        <Toolbar disableGutters>
          <a href="#/Home"><img sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} src={logo} style={{width:"50px"}} alt="logo"/></a>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} style={{justifyContent:"end"}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color:"black"}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <LinkScroll activeClass="active" smooth spy to={page}>
                  <Typography href="/" textAlign="center">{page}</Typography>              </LinkScroll>
                                
                </MenuItem>
              ))}
              <MenuItem key="Projects" onClick={handleCloseNavMenu}>
                      <Typography href="/" textAlign="center">
                  <Link to="/Projects" className='link' style={{textDecoration:"none",color:"black"}}>
                        Projects
                  </Link>    
                        
                        </Typography>
                </MenuItem>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} style={{justifyContent:"end"}}>
            {pages.map((page) => (
              // <Link to={`/${page}`} className='link' style={{textDecoration:"none"}}>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                <LinkScroll activeClass="active" smooth spy to={page}>
                {page}
              </LinkScroll>
              </Button>
              
              // </Link>
            ))}
            
            <Link to="/Projects" className='link' style={{textDecoration:"none"}}>
            <Button
                key="Projects"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                Projects
              </Button>
            </Link>

          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
        <Outlet/>
      </Container>
    </AppBar>
  );
};
export default NavBar;
