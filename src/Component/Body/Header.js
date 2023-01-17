import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import '.././Nav.css'

function Header(props) {
    const [search,setSearch] = useState('');

  return (
    <div>
        <div className='Header'>
            <h1>Place List</h1>
            <div className='HeaderRight'>
                <div className='Select'>
                    <select onChange={(e)=>props.sentselectdata(e.target.value)}>
                        <option>All</option>
                        <option>Restaurant</option>
                        <option>Bakery</option>
                        <option>Cafe</option>
                    </select>
                </div>
                <p>|</p>
                <div className='searchbar'>
                    <input onChange={e=>setSearch(e.target.value)} type="search" placeholder='Search name...'/>
                    <Link to={`/search/${search}`} onClick={()=>props.sentsearchdata(search)}><SearchIcon/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header