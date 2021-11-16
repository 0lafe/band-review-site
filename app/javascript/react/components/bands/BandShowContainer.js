import React, { useState, useEffect } from 'react'
import BandShow from './BandShow.js'

const BandShowContainer = (props) => {
  const [band, setBand] = useState({})

  const bandId = props.match.params.id

  const fetchOneBand = async () => {
    const response = await fetch(`/api/v1/bands/${bandId}`)
    const parsedSingleBandObject = await response.json()
    setBand(parsedSingleBandObject)
  }

  useEffect(() => {
    fetchOneBand()
  }, [])

  return (
    <BandShow
      id={band.id}
      band={band.name}
      biography={band.biography}
    />
  )

}

export default BandShowContainer