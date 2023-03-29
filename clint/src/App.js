import React from "react";
import {BrowserRouter, Routes,Route,Link} from "react-router-dom";
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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

     const [cards,setCards] = useState([]);
     const [open, setOpen] = useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <BrowserRouter>
      
       <header className="header">
         <Link to='History'>
            <button>History</button>
         </Link>
         
          <div>
            <Button onClick={handleOpen}>+ Create Card</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
             >
             <Box sx={style}>
               <form>
                <label>card name</label>
                <input></input>
                <lable>Description</lable>
                <input></input>
               </form>
             </Box>
            </Modal>
          </div>
        
        </header>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
