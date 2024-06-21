import React from 'react'
import './Spage.css';
function Spage() {
  return (<>
    
    <div className='body2'>
    <div className="blur-background"></div>
      <h6> SERVICES </h6> 
      <h2 className='h2'>Exploring My Design <span className='color'>Skills</span></h2>
      <div className='p'>
      We transform your ideas into a distinctive web project that both inspires<br/> you and captivates your customers
      </div>
      <br/>
      <div className='line'>
          <div className='Box' style={{border:"none"}}>
          <img src='./Group.png' alt="img" className='im0' />
          <h5 className='head'>Website / App Design<br/>UX / UI Design</h5>
          <p>Creating Engaging Digital Experiences for Websites and Apps through UX/UI Design 
          </p>
            </div>
          <div className='Box' style={{background : 'black'}}>
    
          <img src="./Group2.png" alt="img" className='im0' />
          <h5 className='head' style={{color:'#BB86FC'}}>Post for social media handles</h5>
          < p style={{color:'#BB86FC'}}>handling the social media of GDSC MM(DU)  as a designer.</p>
           
            </div>
          <div className='Box'style={{background : 'black'}}>
          <img src="./Group3.png" alt="img" className='im0' />
          <h5 className='head' style={{color:'#03DAC6'}}>Poster and graphic Designing</h5>
          < p style={{color:'#898989'}}>also have some experience in poster making to .....</p>
           
          
          </div>
        </div>
      </div></>
  )
}

export default Spage
