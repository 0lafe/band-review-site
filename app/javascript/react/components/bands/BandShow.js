import React from 'react'

const BandShow = (props) => {

  const {band, user} = props
  let editElement
  
  if (user.user){
    if (user.user.role === "admin") {
      editElement = <span><a href={`/bands/${props.id}/edit`}>Edit</a></span>
    } 
  }

  return (
    <div className="callout primary">
      <div className="cell small-6">
        <h1>{band.name}</h1>
      </div>
      <div className="card-divider">
        <p className="card-section">{band.biography}</p>
      </div>
      {editElement}
    </div>
  )
}
export default BandShow