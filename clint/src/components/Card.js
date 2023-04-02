import React,{useState} from 'react'

function Card({name,description}) {
  

  return (
      <>
         <div>
           <div>
              <h2>{name}</h2>
           </div>
           <button>open</button>
           <button>Delete</button>
         </div>
      </>
  )
}

export default Card