import React from 'react'

const ReviewTiles = (props) => {
  const { review, user } = props
  const formattedRating = `${"★".repeat(review.rating)}${"☆".repeat(5-review.rating)}`

  let text

  if (user.role == "admin"){
    text = "ADMIN"
  }

  return (
    <div className="review-tile cell small-8">
      <div className="review">
        <h2 className={text}>{user.username}</h2>
        <p>{formattedRating}</p>
      </div>
      <h3>{review.body}</h3>
    </div>
  )
}

export default ReviewTiles;