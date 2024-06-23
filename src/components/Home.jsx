import React from 'react'
import './home.css';
import NavBar from './NavBar';
import { experimentalStyled as styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Service from './Service';
import Spage from './Spage';
import Recent from "./Recent";
import { colors } from '@mui/material';
export default function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
    <div className='body'>
    <NavBar></NavBar>
    <br/>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
        </Grid>
        <Grid item xs={2}>
        <h1>
      Sahil <br/>
      Panwar
    </h1>
        </Grid>
        <Grid item xs={5}>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ flexGrow: 1 } } className =" con">
      <Grid container spacing={2}>
        <Grid item xs={4}>
      <h2>Services</h2>
      <br></br>
           <div className='app'>
            <img src='.\1one.png'className='ic1'></img>
            <h5 className='p1'>App development</h5>
            
           </div>
           <p className='p2'>I am a App frontend <br/>developer (using flutter).
            </p>
            <br></br>
            <div className='app'>

            <img src='.\2one.png'className='ic1'></img>
            <h5 className='p1'>UI/UX Design</h5>
            
           </div>
           <p className='p2'>UI/Ux Designer in<br/> GDSC MM(DU).
            </p>
            <br></br>
            <div className='app'>

            <img src='.\3rd.png'className='ic1'></img>
            <h5 className='p1'>  Mern Stack<br/>Devloper</h5>
          </div>
        </Grid>
        <Grid item xs={4}>

          
          <img src='.\Rectangle 19783.png' className='ic2'></img>
          <img src=".\sahil.png"className="my"></img>
        </Grid>
        <Grid item xs={4}><div className='container'>
        <h5>
        UI/Ux and App frontend developer</h5> <br/>
        <p className='p2'>Hi I'm <span className='purple'>Sahil</span> .A UI /Ux Designer  and Mern stack Developer .<br/>
        I am a 2nd year CSE student with a keen interest in the design world. I love to create visually appealing and informative designs. Welcome!! to my small world of the internet......
            </p>
            <h2 className='p3'>2 Years </h2>
            <p className='p2'>Experience 
            </p>
            <button className='button'>
              <p className='p2'>Download CV</p>
            </button>
        </div>
        </Grid>
      </Grid>
    </Box>
    </div>
    <Service/>
    <Spage/>
    <Recent/>
    </>
    
  )
}
