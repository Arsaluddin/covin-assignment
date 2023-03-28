import React from "react";
import {BrowserRouter, Routes,Route,Link} from "react-router-dom";
import { useState } from "react";
import Modal from '@mui/material/Modal';
import './App.css';

function App() {

     const [cards,setCards] = useState([]);
     
    const handlecardformation = () => {
        
      <form typeof="submit">
        <input type='text'></input>
      </form> 

    }

  return (
    <div className="App">
      <BrowserRouter>
      
       <header className="header">
         <Link to='History'>
            <button>History</button>
         </Link>
         
            
          <button onClick={() => handlecardformation()}>+ Create Card</button>
            
         
       </header>
        <h1>create your own card</h1>
       <main>
         <Routes>
           <Route />
         </Routes> 
       </main> 
      </BrowserRouter>

    </div>
  );
}

export default App;
