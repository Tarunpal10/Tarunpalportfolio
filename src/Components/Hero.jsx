import React from 'react'
import {  Container, Row } from 'react-bootstrap'
import dp from '../Assets/newp.jpeg'
import '../Style/Hero.css'
import Footer from "../Components/Footer.jsx";




const Hero = () => {


  return (
    <div className='  main-cont bg-dark text-white' >
      <div className=' row-cont ' >
        <div className='' id='col-1'>
       <img src={dp} alt="" className='' />
         </div>

         <div id='col-2'>
         <h1> i ' m <br /> <i> TARUN  PAL </i></h1>
         <p>Welcome to my portfolio! I’m Tarun Pal, a passionate and creative web developer with a knack for crafting elegant and efficient digital solutions. With a strong foundation in both <b> front-end and back-end development </b>, I thrive on transforming complex ideas into user-friendly applications and websites.</p>
         </div>
                           
      </div>
     {/* <Footer/> */}

    </div>

  );
} ;

export default Hero