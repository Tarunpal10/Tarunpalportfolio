import Navbarr  from "../src/Components/Navbarr.jsx";
import Hero from "./Components/Hero";
import Home from "./Components/Home";
import { Route,Routes } from "react-router-dom";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import { useState } from "react";


function App() {
  const [loading , SetLoading]=useState(true)
  const spinner= document.getElementById('spinner')
  if(spinner){
    setTimeout(()=>{
        spinner.style.display='none';
        SetLoading(false)
    },2000)
  }
  return (
    !loading && (
    <>
    <Hero/>
    <Navbarr/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="education" element={<Education/>} />
      <Route path="skill" element={<Skill/>} />
      <Route path="project" element={<Projects/>} />
      <Route path="contact" element={<Contact/>} />


    </Routes>
   

    </>
    

    )

  );

}

export default App;