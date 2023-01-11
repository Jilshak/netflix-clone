import { useEffect, useState } from "react";
import axios from "../../Constants/Axios";
import { API_KEY, baseURL } from "../../Constants/Constants";


// export const Originals = `discover/tv?api_key=${API_KEY}&with_networks=213&page=${Math.floor(Math.random() * 10) + 1}`

function generes() {
    const [state, setState] = useState([])
    axios.get(`${baseURL}genre/movie/list?api_key=${API_KEY}&language=en-US`).then((res) => {
        setState(res.data.generes)
        state.map((item) => {
            return(
                item.id
            )
        })
    })
}