import React from 'react'
import { Link } from 'react-router-dom'

const BandTile = (props) => {
  const {band} = props
  let url
  let image
  if (band.image.url) {
    url = band.image.url
    image = <img className="band-tile-image" src={url} alt="band logo image"/>
  }
  
  return (
    <Link to={`/bands/${band.id}`}>
      <div>
        {image}
        <p className="band-name-text">{band.name}</p>
      </div>
    </Link>
  )
}

export default BandTile