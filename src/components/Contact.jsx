import React from 'react'
import "./Contact.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Email } from '@mui/icons-material';
import { useRef,useState} from 'react';

function Contact() {
  const form= useRef();
  const[ error,Seterorr]= useState({});
  const validation=()=>{

    const formvalue=form.current;
    const newError={}

    if(!formvalue['FirstName'].value.trim){
      newError.FirstName='fill it';
    }
  }
  return (
    <> <div className='contact'>
        <h4>Contact Me</h4>
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { color: 'white',m: 3, width: '50ch' },
        '& .MuiInputBase-input': { color: 'white', fontSize:"1.5vw" }, 
        '& .MuiInputLabel-root': { color: 'white', fontSize:"1.5vw" }, 
        '& .MuiFormHelperText-root': { color: 'white' },
        '& .MuiInput-underline:before': { borderBottomColor: '#8D8D8D' }, // Change standard input underline color to white
        '& .MuiInput-underline:hover:before': { borderBottomColor: '#2C9AE7' }, // Change standard input underline color on hover to white
        '& .MuiInput-underline:after': { borderBottomColor: 'white' }, // Change standard input underline color on focus to white
      }}
      noValidate
      autoComplete="off"
    > <div>
        <TextField 
          id="standard-text"
          className='FirstName'
          label="FirstName"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        > {error.FirstName && <div className="error">{error.first_name}</div>}</TextField>
         <TextField 
          id="standard-number"
          label="LastName"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <br/>
        <TextField 
          id="standard-number"
          label="Email"
          type="email"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
         <TextField 
          id="standard-number"
          label="Phone Number"
          type="Number"
          InputLabelProps={{
            shrink: true,
          }}
          defaultValue="+91"
          variant="standard"
        />
    </div>  
        </Box><br/>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { color: 'white',m: 3, width: '105ch' },
        '& .MuiInputBase-input': { color: 'white', fontSize:"1.2vw" }, 
        '& .MuiInputLabel-root': { color: 'white', fontSize:"1.5vw" }, 
        '& .MuiFormHelperText-root': { color: 'white' },
        '& .MuiInput-underline:before': { borderBottomColor: '#8D8D8D' },
        '& .MuiInput-underline:hover:before': { borderBottomColor: '#2C9AE7' }, 
        '& .MuiInput-underline:after': { borderBottomColor: 'white' }, 
      }}
      noValidate
      autoComplete="off"
    >
         <TextField 
          id="standard-helperText"
          label="Message"
          type="text"
          
          InputLabelProps={{
            shrink: true,
          }}
          helperText="Write your message.."
          variant="standard"
        />
    </Box>
    <br/>
    <Button variant="contained" endIcon={<SendIcon />} className='send' style={{ backgroundColor: "#9747FF",marginLeft: "69%"}}>
        Send
      </Button>
    </div>
    </>
  )
}
export default Contact
