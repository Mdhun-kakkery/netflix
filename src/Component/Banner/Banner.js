import axios from '../../axios'
import { API_KEY, ImgUrl } from '../../constants/constants'
import React, { useEffect, useState } from 'react';
import "./Banner.css"


function Banner() {
    const [upComing, setupComing] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) => {
            console.log(res.data.results[0])
            setupComing(res.data.results[0])
        })

    }, [])

    return (
        <div  className='base-banner' style={{ backgroundImage: `url(${upComing ? ImgUrl + upComing.backdrop_path : ""})` }} >
        <div className='row'>
        <div className=' col-12'>
        
                <div className='banner' >
                
                    <div className='content'>
                        <h1 className='title'>{upComing.title}</h1>
                        <div className='banner_buttons'>
                            <button className='button'>play</button>
                            <button className='button'>My list</button>
                        </div>
                        <h1 className='discription'>{upComing ? upComing.overview : ""}</h1>
                    </div>
                   


                </div>
            </div>
        </div>
        </div>
    )
}

export default Banner;
