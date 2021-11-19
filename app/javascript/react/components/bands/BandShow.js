import React from 'react'

const BandShow = (props) => {

  const {band, user} = props
  let editElement

  if (user){
    if (user.role === "admin") {
      editElement = <span ><a className="edit-button" href={`/bands/${band.id}/edit`}>Edit</a></span>
    } 
  }

  return (
    <div className="callout primary">
      <div className="cell small-6">
        <h1 className="band-head">{band.name}</h1>
      </div>
      <div className="inbox">
        <p>{band.biography}</p>
      </div>
      {editElement}
    </div>
  )
}
export default BandShow