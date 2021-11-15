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
      <BandTile
        key={band.id}
        id={band.id}
        name={band.name}
        biography={band.biography}
      />
    )
  })

  return(
    <div class="row">
      <div class="small-4 large-6 columns" >
        {bandTiles}
      </div>
    </div>
  ) 
}

export default BandsIndexPage