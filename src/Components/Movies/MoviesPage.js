import React from 'react'
import Movies from './Movies'
import { Originals, Horror, Fantasy, Documentaries, Mystery, Science_fiction } from '../Url'

function MoviesPage() {
    return (
        <div>
            <Movies title='Originals' url={Originals} />
            <Movies title='Horror' url={Horror} />
            <Movies title='Fantasy' url={Fantasy} />
            <Movies title='Documentaries' url={Documentaries} />
            <Movies title='Sci-Fi' url={Science_fiction} />
            <Movies title='Mystery' url={Mystery} />
        </div>
    )
}

export default MoviesPage
