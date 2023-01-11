import React from 'react'
import { useEffect, useState } from 'react'
import axios from '../../Constants/Axios'
import '../Movies/Movies.css'
import { API_KEY, baseIMG } from '../../Constants/Constants'

function Movies(props) {

    const [movies, setMovie] = useState([])

    //function to use useEffect
    //Function to fetch data using axios api from the tmdb server
    useEffect(() => {
        axios.get(props.url).then((res) => {
            console.log(res.data.results)
            setMovie(res.data.results)
        })
    }, [])



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
                                    <img className='items' src={`${baseIMG}${item.backdrop_path}`} alt="" />
                                    <h5 className='titles'>{item.title ? item.title : item.name}</h5>
                                </div>
                            )
                        }else{
                            return ''
                        }
                    })}
                </div>
            </h3>
        </div>
    )
}

export default Movies
