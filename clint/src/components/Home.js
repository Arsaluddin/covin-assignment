import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Card from "./Card";
import './Home.css';

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

  const Home = () => {

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
        setCards([{name,dec},...cards]);
        setOpen(false);
     }


    return (
        <>
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
                
                return(
                   <div className="cards">
                      <Card name={id.name} description={id.dec}/>
                   </div>
                )
            })}         
           
      </div>
       
        </>
    )
  }

  export default Home;
