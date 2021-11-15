import React from 'react'
import { useState, useEffect } from 'react'
import BandTile from './BandTile'

const BandsIndexPage = (props) => {
  const [bands, setBands] = useState([])

  const fetchBands = async () => {
    const response = await fetch('/api/v1/bands')
    const parsedBandsArray = await response.json()
    setBands(parsedBandsArray)
  }
  
  useEffect(() => {
    fetchBands()
  }, [])

  const bandTiles = bands.map((band) => {
    return (
      <BandTile
        key={band.id}
        id={band.id}
        name={band.name}
        biography={band.biography}
      />
    )
  })

  return(
    <div>
      {bandTiles}
    </div>
  ) 
}

export default BandsIndexPage