import axios from '../../Constants/Axios'
import YouTube from 'react-youtube'
import React, { useEffect, useState } from 'react'
import '../RowPost/RowPost.css'
import { baseIMG, baseURL, API_KEY } from '../../Constants/Constants'

function RowPost(props) {


    const [urlid, setUrlId] = useState('')
    // function to get the video id from the API so that we can use it to view the youtube video in react-youtube
    const handleClick = (id) => {
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            };

        })
    }

    //when the video ended this will remove the youtube video player
    const endVideo = () => {
        setUrlId('')
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

    //the function to get the api data and store it and then use it by mapping it.
    //it will return it in a row
    const [poster, setPoster] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response) => {

            setPoster(response.data.results)
        })
    }, [])
    return (
        <div className='row'>
            <h3 className='title'>
                {props.title}
                <div className="posters">
                    {poster.map((image) => {
                        if (image.backdrop_path) {
                            return (
                                <div>
                                    {/* on this image we have assigned an event onclick. and passed it to an anonymous
                                     function which will call handleclick fucntion which have the id of the map item */}
                                    <img onClick={() => handleClick(image.id)} className={props.isSmall ? 'small' : 'poster'} src={`${baseIMG}${image.backdrop_path}`} alt="" />
                                    <p className='smallTitle'>{image.title}</p>
                                </div>

                            )
                        } else {
                            return ''
                        }

                    })}
                </div>
                {urlid && <YouTube opts={opts} videoId={urlid.key} onEnd={endVideo} />}
            </h3>
        </div>
    )
}

export default RowPost
