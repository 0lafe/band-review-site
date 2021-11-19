import React from 'react'
import { Link } from 'react-router-dom'

const BandTile = (props) => {
  const {band} = props
  let url
  if (band) {
    url = band.image.url
  }

  return (
    <div style={{backgroundImage: `url(${url})`, backgroundSize: "cover", backgroundPosition: "center"}}>
      <Link to={`/bands/${band.id}`}>
        <p className="band-name-text">{band.name}</p>
      </Link>
    </div>
  )
}

export default BandTile