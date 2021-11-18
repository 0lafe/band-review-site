import React, { useState, useEffect } from 'react'
import BandShow from './BandShow.js'
import ReviewForm from './ReviewsForm.js'
import ReviewTiles from './ReviewTiles.js'

const BandShowContainer = (props) => {
  const [band, setBand] = useState({})
  const [reviews, setReviews] = useState([])
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

    setBand(parsedSingleBandObject.band)
    setReviews(parsedSingleBandObject.band.reviews)
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
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        credentials:"same-origin",
        body: JSON.stringify(formPayload)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        throw(new Error(errorMessage))
      }
      const newReview = await response.json()
      if (newReview.review.id) {
        setReviews([
          ...reviews,
          newReview.review
        ])
      }
      setFormData({
        rating: "",
        body:"",
        band_id:bandId
      })
    } catch(err) {
      console.log(err)
    }
  }

  const reviewTiles = reviews.map((review) => {
    return(
      <ReviewTiles
        key={review.id}
        review = {review}
        user = {review.user}/>
    ) 
  })

  return (
    <div> 
      <BandShow
          band={band}
      />
      <ReviewForm
        addNewReview = {addNewReview}
        formData = {formData}
        setFormData = {setFormData}
      />
        <div className="grid-x grid-margin-x grid-margin-y align-center-middle">
          {reviewTiles}
        </div>
    </div>
  )
}

export default BandShowContainer