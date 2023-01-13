import React from 'react'
import { useEffect, useState } from 'react'
import axios from '../../Constants/Axios'
import '../Movies/Movies.css'
import YouTube from 'react-youtube'
import { API_KEY, baseIMG } from '../../Constants/Constants'

function Movies(props) {


    const [moviesid, setMoviesId] = useState('')
    // function to get the video id from the API so that we can use it to view the youtube video in react-youtube
    const handleClick = (id) => {
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if (response.data.results.length !== 0) {
                setMoviesId(response.data.results[0])
            };

        })
    }



    const [movies, setMovie] = useState([])

    //function to use useEffect
    //Function to fetch data using axios api from the tmdb server
    useEffect(() => {
        axios.get(props.url).then((res) => {
            console.log(res.data.results)
            setMovie(res.data.results)
        })
    }, [])

    //when the video ended this will remove the youtube video player
    const endVideo = () => {
        setMoviesId('')
    }


    //these are the function of the video player
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },

    };


    
    // function to map the moveis and render it accordingly on the screen
    return (

        <div className="rowpos">
            <h3>
                <h2 className='heading'>{props.title}</h2>
                <div className="posterz">
                    {movies.map((item) => {
                        if (item.backdrop_path) {
                            return (
                                <div>
                                    <img onClick={() => handleClick(item.id)} className='items' src={`${baseIMG}${item.backdrop_path}`} alt="" />
                                    <h5 className='titles'>{item.title ? item.title : item.name}</h5>
                                </div>
                            )
                        } else {
                            return ''
                        }
                    })}
                </div>
                {moviesid && <YouTube opts={opts} videoId={moviesid.key} onEnd={endVideo} />}
            </h3>
        </div>
    )
}

export default Movies
