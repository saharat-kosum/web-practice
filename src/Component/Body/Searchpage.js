import React, { useState } from 'react'
import './Body.css'
import PlaceCard from './PlaceCard'
import Data from './example_data.json'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Searchpage = (SearchData) => {
  const [page,setPage] = useState(1);
  const contentperPage = 12;
  const startIndex = (page - 1) * contentperPage;
  const displayedData = Data.slice(startIndex, startIndex + contentperPage);
  const searchresult = displayedData.filter(e=>{return e.name.includes(SearchData.element)});
  const totalPages = Math.ceil(searchresult.length / contentperPage);

  return (
    <div>
      <div className='Content'>
          {searchresult.map((element)=><PlaceCard element={element} key={element.id} sentname={(e)=>SearchData.sentname(e)}/>)}
      </div>
      <div className='FooterContainer'>
          <div className='Footerbtn' onClick={() => page > 1 && setPage(page - 1)}><KeyboardArrowLeftIcon/></div>
          <div className='PageNumber'>{page}</div>
          <div className='Footerbtn' onClick={() => page < totalPages && setPage(page + 1)}><KeyboardArrowRightIcon/></div>
      </div>
    </div>
  )
}

export default Searchpage