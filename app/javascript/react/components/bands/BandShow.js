import React from 'react'
import { Link } from 'react-router-dom'

const BandShow = (props) => {
  return (
    <div>
      <h2>{props.band}</h2>
      <p>{props.biography}</p>
    </div>
  )
}

export default BandShow