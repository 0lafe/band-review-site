import React from 'react'

const BandShow = (props) => {

  const {band} = props

  return (
    <div className="callout primary">
      <div className="cell small-6">
        <h1>{band.name}</h1>
      </div>
      <div className="card-divider">
        <p className="card-section">{band.biography}</p>
      </div>
    </div>
  )
}
export default BandShow