import React from 'react'
import './Spage.css';
import Grid from '@mui/material/Unstable_Grid2';
import Item from '@mui/material/Box';
function Spage() {
  return (
    <div className='body'>
      <h6> SERVICES </h6> 
      <h2>Exploring My Design <span className='color'>Skills</span></h2>
      <div className='p'>
      We transform your ideas into a distinctive web project that both inspires<br/> you and captivates your customers
      </div>
      <br/>
      <div className='boxes'>
      <Grid container spacing={3} className='container'>
  <Grid item xs={4}>
    <Item className="i1i">xs</Item>
  </Grid>
  <Grid item xs={4}>
    <Item className="i2i">xs=6</Item>
  </Grid>
  <Grid item xs={4}>
    <Item className="i3i">xs</Item>
  </Grid>
</Grid>
      </div>
    </div>
  )
}

export default Spage
