import React from "react";
import {BrowserRouter, Routes,Route,Link} from "react-router-dom";
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Card from "./components/Card";
import './App.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {

     const [history,setHistory] = useState(['clicked']);
     const [cards,setCards] = useState([]);
     const [open, setOpen] = useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     const handleHistory = () => {
      
     }

     const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target[0].value;
        const dec = e.target[1].value;
        setCards([<Card name={name} description={dec}/>,...cards]);

     }

  return (
    <div className="App">
      <BrowserRouter>
      
       <header className="header">
         <div>
          <Button onClick={handleHistory}>History</Button>
          <Modal
              open={open}
              onClose={handleClose}
             >
             <Box>
              
             </Box>
            </Modal>
         </div>
         
          <div>
            <Button onClick={handleOpen}>+ Create Card</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
             >
             <Box sx={style}>
               <form onSubmit={handleSubmit}>
                 <label>Card Name</label>
                 <input type='text' id="card" name="card"></input>
                 <label>Description</label>
                 <input type="text" placeholder="Descriotion"></input>
                 <button type="submit">Submit</button>
               </form>
             </Box>
            </Modal>
          </div>
        
        </header>
        <div>
           {cards && cards.map((id) => {
                
                <div>{id}</div>
                console.log(id)
           })}
      </div>
        
      </BrowserRouter>
     

    </div>
  );
}

export default App;
