import React, { useEffect, useState } from 'react'
import '../Banner/Banner.css'
import axios from '../../Constants/Axios'
import { API_KEY, baseIMG } from '../../Constants/Constants'

function Banner() {
    const [movie, setMovie] = useState({})
    useEffect(()=> {
        axios.get(`trending/all/day?api_key=${API_KEY}&page=${Math.floor(Math.random() * 1000) + 1}`).then((response) => {
            console.log(response.data)
            setMovie(response.data.results[Math.floor(Math.random() * 21)])
        })
    },[])

    //function to return the title without breaking it
    const title = () => {
        if (movie){
            if (movie.title){
                return movie.title
            }else{
                return movie.name
            }
        }else{
            return ''
        }
    }
    return (
        <div className='Banner' style={{backgroundImage: `url(${movie ? baseIMG + movie.backdrop_path : ''})`}}>
            <div className="content">
                <h1 className='title'>{title()}</h1>
                <div className='banner_button'>
                    <button className='button'> Play Now</button>
                    <button className='button'> My List</button>
                </div>
                <h5 className='description'>{ movie ? movie.overview : ''}</h5>
            </div>
            <div className="fade">
                
            </div>
        </div>
        
    )
}

export default Banner