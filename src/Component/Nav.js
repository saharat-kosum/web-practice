import React from 'react'
import './Nav.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='NavContainer'>
        <nav>
            <div className='logo'><Link to='/'><LogoDevIcon style={{color:'white', fontSize:'40px'}}/></Link></div>
            <ul>
                <li><NotificationsIcon style={{color:'white'}}/></li> 
                <li><AccountCircleIcon style={{color:'white'}}/></li> 
                <li><ExpandMoreIcon style={{color:'white'}}/></li> 
            </ul>
        </nav>
    </div>
  )
}

export default Nav