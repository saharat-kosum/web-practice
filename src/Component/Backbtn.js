import React from 'react'
import './Backbtn.css'
import { useNavigate } from 'react-router-dom';

function Backbtn() {
    const navigate = useNavigate('/');
    const handleClick = () => {
        navigate('/');
      };
    
  return (
    <div className='btn Backbtn' onClick={handleClick}>Back</div>
  )
}

export default Backbtn