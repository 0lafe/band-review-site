import React, { useState, useEffect } from 'react'
import BandShow from './BandShow.js'
import ReviewForm from './ReviewsForm.js'

const BandShowContainer = (props) => {
  const [band, setBand] = useState({})
  const bandId = props.match.params.id
  const[formData, setFormData] = useState({
    rating: "",
    body:"",
    band_id:bandId
  })

  

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

  const addNewReview = async (formPayload) => {
    try {
      const response = await fetch("/api/v1/reviews", {
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formPayload)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        throw(new Error(errorMessage))
      }
      const newReview = await response.json()
      setReviews([
        ...reviews,
        newReview
      ])
    } catch(err) {
      console.log(err)
    }
  }

  return (
   <div> 
     <BandShow
      id={band.id}
      band={band.name}
      biography={band.biography}
    />
     <ReviewForm
      addNewReview = {addNewReview}
      formData = {formData}
      setFormData = {setFormData}
      />
    </div>
  )
}

export default BandShowContainer