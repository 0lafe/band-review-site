import React from 'react'

const BandShow = (props) => {
  return (
    <div className="callout primary">
      <div className="cell small-6">
        <h1>{props.band}</h1>
      </div>
      <div className="card-divider">
        <p className="card-section">{props.biography}</p>
      </div>
    </div>
  )
}
export default BandShow