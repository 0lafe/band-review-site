import React from 'react'
import { Link } from 'react-router-dom'

const BandTile = (props) => {
  const {band} = props

  return (
    <div style={{backgroundImage: `url(${band.image.url})`, backgroundSize: "cover", backgroundPosition: "center"}}>
      <Link to={`/bands/${band.id}`}>
        <p className="band-name-text">{band.name}</p>
      </Link>
    </div>
  )
}

export default BandTile