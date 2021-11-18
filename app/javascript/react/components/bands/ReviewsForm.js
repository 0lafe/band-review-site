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

  const handleButtons = (event) => {
    event.preventDefault()

    setFormData({
      ...formData,
      "rating": parseInt(event.currentTarget.name)
    })
  }

  const numbers = [0, 1, 2, 3, 4, 5]

  const ratingButtons = (numbers).map(number => {
    return (
      <div key={number}>
        <input type="radio" name={number} id={number} onChange={handleButtons} value={number}/>
        <label htmlFor={number}>{number}</label>
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

      {ratingButtons}

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