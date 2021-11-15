import React from 'react'
import { Link } from 'react-router-dom'

const BandTile = (props) => {
  return (
    <div>
      <Link to={`/bands/${props.id}`}>
        <p className="band-name-text">{props.name}</p>
      </Link>
    </div>
  )
}

export default BandTile