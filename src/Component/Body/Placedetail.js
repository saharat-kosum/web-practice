import React, { useState } from 'react'
import './Placedetail.css'
import StarIcon from '@mui/icons-material/Star';
import Data from './example_data.json'

const Placedetail = (name) => {
  const [information,setInformation]=useState(true);
  const [images,setImages]=useState(false);
  const filterdata = Data.filter(e=>{return e.name.includes(name.element)});

  return (
    <div className='Placedetail'> 
      <div className='detailbtn'>
        <div className={`InformationMobile ${information ? 'Bringtofront' : ''}`} onClick={()=>{setInformation(true);setImages(false);}}>Information</div>
        <div className={`InformationImagesMobile ${images ? 'Bringtofront' : ''}`} onClick={()=>{setImages(true);setInformation(false);}}>Images</div>
      </div>
      <div className={`InformationDesktop ${!information ? 'DisplayNone' : ''}`}>
        <div className='PlacedetailImg'><img alt='PlacedetailImg' src={filterdata[0].profile_image_url}></img></div>
        <div className='InformationHeader'>
          <h2>{filterdata[0].name}</h2>
          <div className='InformationRating'>
            <StarIcon className='star' style={{color:'#fbbc04'}}/>
            <p>{filterdata[0].rating}</p>
          </div>
        </div>
        <div className='InformationAddress'>
          <h4>Address :</h4>
          <p>{filterdata[0].address}</p>
        </div>
        <div className='InformationOpenTime'>
          <h4>Open :</h4>
          <div>
            <p>{filterdata[0].operation_time[0].day}: {filterdata[0].operation_time[0].time_open} - {filterdata[0].operation_time[0].time_close}</p>
            <p>{filterdata[0].operation_time[1].day}: {filterdata[0].operation_time[1].time_open} - {filterdata[0].operation_time[1].time_close}</p>
            <p>{filterdata[0].operation_time[2].day}: {filterdata[0].operation_time[2].time_open} - {filterdata[0].operation_time[2].time_close}</p>
            <p>{filterdata[0].operation_time[3].day}: {filterdata[0].operation_time[3].time_open} - {filterdata[0].operation_time[3].time_close}</p>
            <p>{filterdata[0].operation_time[4].day}: {filterdata[0].operation_time[4].time_open} - {filterdata[0].operation_time[4].time_close}</p>
            <p>{filterdata[0].operation_time[5].day}: {filterdata[0].operation_time[5].time_open}</p>
            <p>{filterdata[0].operation_time[6].day}: {filterdata[0].operation_time[6].time_open}</p>
          </div>
        </div>
      </div>
      <div className={`ImgDesktop ${!images ? 'DisplayNone' : ''}`}>
        <h3>Images</h3>
        <div className='Imgs'>
          <img className='img1' alt='ExampleImg' src={filterdata[0].images[0]}/>
          <img className='img2' alt='ExampleImg' src={filterdata[0].images[1]}/>
          <img className='img3' alt='ExampleImg' src={filterdata[0].images[2]}/>
        </div>
      </div>
    </div>
  )
}

export default Placedetail