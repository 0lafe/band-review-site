import React from 'react'
import { useState, useEffect } from 'react'
import helperFetch from '../helpers/Fetcher'
import BandTile from './BandTile'

const BandsIndexPage = (props) => {
  const [bands, setBands] = useState([])
  
  useEffect(() => {
    helperFetch('api/v1/bands').then(bandsData => {
      setBands(bandsData.bands)
    })
  }, [])
  
  const bandTiles = bands.map((band) => { 
    return (
        <div className="band-tile cell small-4" key={band.id}>
          <BandTile
            key={band.id}
            band={band}
          />
        </div>
      )
  })

  return(
    <div className="band-tile-container" >
      <div className="grid-x grid-margin-x grid-margin-10 space">
         {bandTiles}
      </div>
    </div>
  ) 
}

export default BandsIndexPage