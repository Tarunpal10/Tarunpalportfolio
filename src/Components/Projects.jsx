import React from 'react'
import '../Style/Project.css'
import gymweb from '../Assets/gymweb.png'
import { FaCode } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import crypto from '../Assets/crypto.png'
import calc from '../Assets/calcu.png'
import port from '../Assets/portfolio.png'
import { IoEyeOff } from "react-icons/io5";
import foodpanda from '../Assets/foodpanda.png'
import weather from '../Assets/weather.png'
import Footer from './Footer'

const Projects = () => {
  return (
    <>
      <div className="project-main">
        <h2>Projects</h2>
        <p>" I have created more then 20 projects individual realated to web devlopment with the strong skill set of FrontEnd and BackEnd Web Devlopment.  "</p>
           <div className="p-p-main">
        <div className="p-container">
         <img src={gymweb} alt="" height={220} width={350}/>
         <h1>Gym Website</h1>
        
            <h3>React js | Scss </h3>
            <div className="h3-p">
            <h3><a href="https://github.com/Tarunpal10/gym_website">Code <FaCode/></a></h3>
            <h3><a href="https://thegymwebsite.netlify.app/">Preview <BsEyeFill/></a></h3>
            </div>
        </div>

        <div className="p-container">
         <img src={crypto} alt="" height={220} width={350}/>
         <h1>Crypto Detailer</h1>
        
            <h3>React Js|Scss|Chart Js</h3>
            <div className="h3-p">
            <h3><a href="https://github.com/Tarunpal10/Cryptocurrency-detailer">Code <FaCode/></a></h3>
            <h3><a href="https://cryptodetailer.netlify.app/">Preview <BsEyeFill/></a></h3>
            </div>
        </div> 
        
        <div className="p-container">
         <img src={calc} alt="" height={220} width={350}/>
         <h1> Multi Calculator</h1>
        
            <h3>React js | Css </h3>
            <div className="h3-p">
            <h3><a href="https://github.com/Tarunpal10/project1">Code <FaCode/></a></h3>
            <h3><a href="https://calculatorinfo.netlify.app/">Preview <BsEyeFill/></a></h3>
            </div>
        </div>

        <div className="p-container">
         <img src={port} alt="" height={220} width={350}/>
         <h1>Portfolio</h1>
        
            <h3>React js | Css |Scss </h3>
            <div className="h3-p">
            <h3><a href="https://github.com/Tarunpal10/My-portfolio">Code <FaCode/></a></h3>
            <h3><a href="https://tarunpalportfolio.netlify.app/">Preview <BsEyeFill/></a></h3>
            </div>
        </div>

        <div className="p-container">
         <img src={foodpanda} alt="" height={220} width={350}/>
         <h1>Food Panda Clone</h1>
        
            <h3> Html | Css </h3>
            <div className="h3-p">
            <h3><a href="https://github.com/Tarunpal10/foodpanda-clone">Code <FaCode/></a></h3>
            <h3>Preview <IoEyeOff />
            </h3>
            </div>
        </div>

        <div className="p-container">
         <img src={weather} alt="" height={220} width={350}/>
         <h1> Weather App</h1>
        
            <h3> Html | Css | Javascript </h3>
            <div className="h3-p">
            <h3><a href="https://github.com/Tarunpal10/Weather_app">Code <FaCode/></a></h3>
            <h3>Preview <IoEyeOff />
            </h3>
            </div>
        </div>

        
   <h1> Check Github For More <button> <a href="https://github.com/Tarunpal10"> Click me</a></button></h1>
   </div>
      </div>
      <Footer/>

    </>
  )
}

export default Projects