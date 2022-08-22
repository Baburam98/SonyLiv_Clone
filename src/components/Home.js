import React from 'react'
import { Helmet } from 'react-helmet'
import Games from './Games'
import Movies from './Movies'
import Originals from './Originals'
import Premium from './Premium'
import Slide from './Slide'
import Sports from './Sports'
import TvShows from './TvShows'

function Home() {
    return (
        <div>
            <TvShows/>
            <Originals/>
            <Sports/>
            <Movies/>
            <Premium/>
            <Games/>
            <Helmet>
                <title>SonyLIV - Watch Indian TV Shows</title>
            </Helmet>
        </div>
    )
}

export default Home
