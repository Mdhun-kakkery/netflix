import axios from '../../axios'
import YouTube from 'react-youtube';
import{ImgUrl,API_KEY} from '../../constants/constants'
import React, { useEffect,useState } from 'react';
import "./Posters.css"



function Posters(props) {

  const [movies, setmovies] = useState([])
  const [utubeurl, setutubeurl] = useState('')
 
 

  useEffect(() => {
    axios.get(props.url).then((res) => {
        console.log(res.data.results);
        setmovies(res.data.results);
      })

})
const opts = {
  height: '50%',
  width: '50%',

  

  playerVars: {
  
    autoplay: 1,
  },
}


const handlevedio=(id)=>{
  axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
    console.log(res.data.results[0])
  if(res.data.results.length!==0){
    setutubeurl(res.data.results[0])
  }
  else{
   console.log("no data")
  }

  })
}
const closevedio=()=>{
  if(utubeurl!==""){
    setutubeurl("")
  }
}


return( 


      <div className='row_post' onClick={()=>closevedio()}>
      <h2>{props.title}</h2>
        <div className='poster'>
        {movies.map((movie)=>
          <div className='pos'>
            <img onClick={()=>handlevedio(movie.id)} className='post' src={`${ImgUrl+movie.backdrop_path}`} alt=""/>
          <p> {movie.title}</p>
         
       
          </div>
          )}
      
      </div> 
    <div className='vedio_window'>
      { utubeurl && <YouTube opts={opts} videoId={utubeurl.key} />}
      </div>

      </div>

  )
}

export default Posters;
