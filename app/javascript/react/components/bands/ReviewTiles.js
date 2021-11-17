import React from 'react'

const ReviewTiles = (props) => {
  const { review } = props

  return (
    <div>
      <p>{review.rating}</p>
      <p>{review.body}</p>
    </div>
  )
}

export default ReviewTiles;