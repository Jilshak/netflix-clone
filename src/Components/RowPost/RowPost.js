import axios from '../../Constants/Axios'
import YouTube from 'react-youtube'
import React, { useEffect, useState } from 'react'
import '../RowPost/RowPost.css'
import { baseIMG, baseURL, API_KEY } from '../../Constants/Constants'

function RowPost(props) {

    
    const [urlid, setUrlId] = useState('')

    const handleClick = (id) =>{
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            if (response.data.results.length !== 0){
                setUrlId(response.data.results[0])
            }
            console.log(response.data.results)
            
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


    const [poster, setPoster] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response) => {
            
            setPoster(response.data.results)
        })
    },[])
    return (
        <div className='row'>
            <h3 className='title'>
                {props.title}
                <div className="posters">
                    {poster.map((image) => {
                        return (
                            <div>
                                <img onClick={() => handleClick(image.id)} className={ props.isSmall ? 'small' : 'poster'} src={`${baseIMG}${image.backdrop_path}`} alt="" />
                                <p className='smallTitle'>{image.title}</p>
                            </div>
                            
                        )
                    })}
                </div>
                { urlid && <YouTube opts={opts} videoId={urlid.key} onEnd={endVideo} />}
            </h3>
        </div>
    )
}

export default RowPost
