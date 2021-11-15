import React from 'react'
import { useState, useEffect } from 'react'
import BandTile from './BandTile'

const BandsIndexPage = (props) => {
  const [bands, setBands] = useState([])

  const fetchBands = async () => {
    try{
      const response = await fetch('/api/v1/bands')
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parsedBandsArray = await response.json()
      setBands(parsedBandsArray)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }
  
  useEffect(() => {
    fetchBands()
  }, [])

  const bandTiles = bands.map((band) => { 
    return (
      <div className="cell small-4 band-tile" key={band.id}>
        <BandTile
          id={band.id}
          name={band.name}
          biography={band.biography}
        />
      </div>
      )
  })

  return(
    <div className="grid-x grid-margin-x grid-margin-y">
        {bandTiles}
    </div>
  ) 
}

export default BandsIndexPage