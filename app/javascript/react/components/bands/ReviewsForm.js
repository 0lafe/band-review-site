import React, { useState } from "react";

const ReviewForm = (props) => {
  const { formData, setFormData } = props

  const handleChange = (event) => {
    event.preventDefault()
    const newValue = event.currentTarget.value
    setFormData({
      ...formData,
      [event.currentTarget.name]: newValue

    })

  }
  const handleSubmit = (event) => {
    event.preventDefault()
    props.addNewReview(formData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="rating">Rating</label>
      <input 
      type="text"
      name="rating"
      id="rating"
      onChange={handleChange}
      value={formData.rating}
      />
      <label htmlFor="body">Review</label>
      <input 
      type="text"
      name="body"
      id="body"
      onChange={handleChange}
      value={formData.body}
      />
      <input type="submit" />
    </form>
    
  )
}
export default ReviewForm