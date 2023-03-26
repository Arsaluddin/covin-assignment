import React from "react";
import {BrowserRouter, Routes,Route,Link} from "react-router-dom";
import { useState } from "react";
import './App.css';

function App() {

  const [path,setPath] = useState("/");
     


  return (
    <div className="App">
      <BrowserRouter>
      
       <header className="header">
         <Link to='History'>
            <button>History</button>
         </Link>
         <Link to="Create-card">
            <button>+ Create Card</button>
         </Link>
       </header>
        
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
