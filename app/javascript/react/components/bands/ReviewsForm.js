import React, { useState } from "react";

const ReviewForm = (props) => {
  const { formData, setFormData } = props

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const numbers = [0, 1, 2, 3, 4, 5]

  const ratingButtons = (numbers).map(number => {
    return (
      <div key={number}>
        <input
          type="radio"
          name="rating"
          id={number}
          onChange={handleChange}
          value={number}
        />
        <label htmlFor="rating">{number}</label>
      </div>
    )
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addNewReview(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="rating">Rating</label>

      <div className="review-button">
        {ratingButtons}
      </div>

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