import React,{useState} from 'react'
import './Card.css';
import {Link} from 'react-router-dom'

function Card({name,description}) {
  
   const [items,setItems] = useState([]) 

  return (
      <>
         <div className='card-container'>
           <div className='card-name'>
              <h2>{name}</h2>
              <h2>{description}</h2>
           </div>
           <Link to='/items'>
             <button>open</button>
           </Link>
           <button>Delete</button>
         </div>
      </>
  )
}

export default Card