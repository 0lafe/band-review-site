import React from 'react'
import { Link } from 'react-router-dom'
const BandTile = (props) => {
  return (
    <div className='band-tile'>
      <Link to={`/bands/${props.id}`}>
        <p>{props.name}</p>
      </Link>
      <hr />
    </div>
  )
}
export default BandTile