import React, { useState, useEffect } from 'react'
import helperFetch from '../helpers/Fetcher.js'
import BandShow from './BandShow.js'
import ReviewForm from './ReviewsForm.js'
import ReviewTiles from './ReviewTiles.js'

const BandShowContainer = (props) => {
  const [band, setBand] = useState({})
  const [reviews, setReviews] = useState([])
  const [user, setUser] = useState({})
  const bandId = props.match.params.id
  const[formData, setFormData] = useState({
    rating: "",
    body: "",
    band_id: bandId
  })

  useEffect(() => {
    helperFetch(`/api/v1/bands/${bandId}`).then(bandData => {
      setBand(bandData.band)
      setReviews(bandData.band.reviews)
    })
    helperFetch('/api/v1/users').then(userData => {
      setUser(userData.user)
    })
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
      if (newReview.errors) {
        alert(newReview.errors)
      } else {
        setReviews([
          ...reviews,
          newReview.review
        ])
      }
      setFormData({
        rating: "",
        body: ""
      })
    } catch(err) {
      console.log(err)
    }
  }

  const reviewTiles = reviews.map((review) => {
    return(
      <ReviewTiles
        key={review.id}
        review={review}
        user={review.user}/>
    ) 
  })
  
  let createReviews
  if (user.role) {
    createReviews = (
      <ReviewForm 
        addNewReview={addNewReview} 
        formData={formData} 
        setFormData={setFormData} 
      />
    )
  }

  return (
    <div> 
      <BandShow
        band={band}
        user={user}
      />
      <div className="grid-x grid-margin-x grid-margin-y align-center-middle">
        {createReviews}
        {reviewTiles}
      </div>
    </div>
  )
}

export default BandShowContainer