import React, { useState, useEffect } from 'react'
import BandShow from './BandShow.js'

const BandShowContainer = (props) => {
  const [band, setBand] = useState({})
  
  const [user, setUser] = useState({})
  
  const bandId = props.match.params.id

  const fetchOneBand = async () => {
    try{
      const response = await fetch(`/api/v1/bands/${bandId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parsedSingleBandObject = await response.json()
    setBand(parsedSingleBandObject)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchOneBand()
  }, [])

  const fetchUser = async () => {
    try{
      const response = await fetch(`/api/v1/users`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const parsedUserObject = await response.json()
    setUser(parsedUserObject)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])
  
  return (
    <BandShow
      id={band.id}
      band={band.name}
      biography={band.biography}
      user={user}
      // current_user={current_user}
    />
  )
}

export default BandShowContainer