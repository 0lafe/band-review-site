import React from 'react'

const ReviewTiles = (props) => {
  const { review, user } = props

  const formattedRating = `${"★".repeat(review.rating)}${"☆".repeat(5-review.rating)}`

  return (
    <div className="review-tile cell small-6">
      <div className="review">
        <h2>{user.username}</h2>
        <p>{formattedRating}</p>
      </div>
      <h3>{review.body}</h3>
    </div>
  )
}

export default ReviewTiles;