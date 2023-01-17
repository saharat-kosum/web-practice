import React, { useState } from 'react'
import './PlaceCard.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';

const PlaceCard = (Data) => {

    const images = [Data.element.images[0],Data.element.images[1],Data.element.images[2]];
    const [imageIndex,setImageIndex]=useState(0);
  return (
    <div className='PlaceCard'>
        <div className='PlaceCardHeader'>
            <img className='ProfileImg' src={Data.element.profile_image_url}/>
            <div className='PlaceCardProfile'>
                <h3><Link to={`/placedetail/${Data.element.name}`} onClick={()=>Data.sentname(Data.element.name)} style={{color:'black'}}>{Data.element.name}</Link></h3>
                <div className='PlaceCardDetail'>
                    <div className='PlaceCardTime'>
                        <CalendarMonthIcon className='calendar'/>
                        <p>{Data.element.operation_time[3].time_open} - {Data.element.operation_time[3].time_close}</p>
                    </div>
                    <div className='PlaceCardRating'>
                        <StarIcon className='star' style={{color:'#fbbc04'}}/>
                        <p>{Data.element.rating}</p>
                    </div>
                    <div className='Arrow'>
                        <div className='ArrowLeft Arrowbtn' onClick={()=>setImageIndex((imageIndex-1+images.length)%images.length)}><KeyboardArrowLeftIcon/></div>
                        <div className='ArrowRight Arrowbtn' onClick={()=>setImageIndex((imageIndex+1)%images.length)}><KeyboardArrowRightIcon/></div>
                    </div>
                    <p className='PlaceCardRatingMobile'>{Data.element.rating}</p>
                </div>
            </div>
        </div> 
        <div>
            <img className='ExampleImgDesktop sample1' src={images[0]} />
            <img className='ExampleImgDesktop' src={images[1]} />
            <img className='ExampleImgDesktop sample3' src={images[2]} />
        </div>
        <div>
            <img className='ExampleImgMobile' src={images[imageIndex]}/>
        </div> 
    </div>
  )
}

export default PlaceCard