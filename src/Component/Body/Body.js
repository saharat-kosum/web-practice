import React, { useState,useEffect } from 'react'
import './Body.css'
import PlaceCard from './PlaceCard'
import Data from './example_data.json'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Body = (props) => {
  const [selectdata,Setselectdata] = useState(Data);
  const [page,setPage] = useState(1);
  const contentperPage = 12;
  const totalPages = Math.ceil(selectdata.length / contentperPage);
  const startIndex = (page - 1) * contentperPage;
  const displayedData = selectdata.slice(startIndex, startIndex + contentperPage);

  useEffect(() => {
    if (props.selectdata) {
      if(props.selectdata==='All'){
        Setselectdata(Data);
      }
      else{
        Setselectdata(Data.filter(e => {return e.categories.includes(props.selectdata.toLowerCase())}));
      }
    }
  }, [props.selectdata]);

  return (
    <div>
      <div className='Content'>
          {displayedData.map((element)=><PlaceCard element={element} key={element.id} sentname={(e)=>props.sentname(e)}/>)}
      </div>
      <div className='FooterContainer'>
          <div className='Footerbtn' onClick={() => page > 1 && setPage(page - 1)}><KeyboardArrowLeftIcon/></div>
          <div className='PageNumber'>{page}</div>
          <div className='Footerbtn' onClick={() => page < totalPages && setPage(page + 1)}><KeyboardArrowRightIcon/></div>
      </div>
    </div>
  )
}

export default Body