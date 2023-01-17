import React from 'react'
import './Sidebar.css'
import LogoDevIcon from '@mui/icons-material/LogoDev';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='Sidebar'>
        <div className='SidebarIcon'><Link to='/'><LogoDevIcon style={{fontSize:'40px'}}/></Link></div>
        <div className='Sidebarplace'>
            <div className='SidebarplaceIcon'><ListAltIcon style={{color:'white'}}/></div>
            <p>Place</p>
        </div>
    </div>
  )
}

export default Sidebar