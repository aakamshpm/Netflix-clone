import React, {useState, useEffect } from 'react'
import './Banner.css'
import axios from '../../constants/axios'
import {API_KEY, ImageUrl} from '../../constants/constants'

function Banner() {
const [movie, setMovie] = useState([])  
useEffect(() => {
  axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    setMovie(response.data.results[5]);
  })
}, [])
  return (
    <div style={{backgroundImage : `url(${movie ? ImageUrl+movie.backdrop_path : ''})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.name || movie.title : ''}</h1>
            <div className='bannerButtons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ''}</h1>
        </div>
        <div className="bottomFade"></div>
        
    </div>
  )
}

export default Banner