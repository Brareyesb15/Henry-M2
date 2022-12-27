import React from 'react'

export default function Species (props) {
  return (
    <div> 
      <h2 >Species</h2>
      {props.species.map((a,i) => (<button key = {i} onClick={props.handleSpecies} value = {a}>{a}</button> ))}
      <button onClick={props.handleAllSpecies}>All Animals</button> 

    </div>
  )
}
