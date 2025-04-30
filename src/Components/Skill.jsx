import React, { useEffect } from "react";
import "../Style/Skill.css";
import { FaReact, FaHtml5, FaCss3, FaPython, FaStarHalfAlt, FaStar } from "react-icons/fa";
import { SiJavascript, SiMysql, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";
import { DiDjango, DiFirebase } from "react-icons/di";
import htmll from '../Assets/htmll.webp';
import css from '../Assets/cssnew.png';
import js from '../Assets/jsnew.webp';
import react from '../Assets/reactnew.jpeg';
import pyhton from '../Assets/pyhton.webp';
import expres from '../Assets/express.jpg';
import node from '../Assets/nodenew.jpeg';
import mysql from '../Assets/sql.jpg';
import mongodb from '../Assets/mongo.jpg';
import django from '../Assets/django.jpg';
import boot from '../Assets/boot.webp';
import fire from '../Assets/firebase.png';
import c from '../Assets/c.png';
import java from '../Assets/java.webp';
import Footer from '../Components/Footer';

const Skill = () => {
  // Add animation on component mount
  useEffect(() => {
    // Set animation delay for each skill tag
    const skillItems = document.querySelectorAll('.newskill h5');
    skillItems.forEach((item, index) => {
      item.style.setProperty('--i', index + 1);
    });
  }, []);

  return (
    <>
    <div className="main-skill">
      <h1 className="h1">Front-End Technologies</h1>
      <div className="container">
        <div className="card">
          <img src={htmll} className="card-img-top" alt="HTML" />
          <div className="card-body">
            <h3 className="card-title">Html | Html5</h3>
            <p className="card-text">Rating: <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
          </div>
        </div>

        <div className="card">
          <img src={css} className="card-img-top" alt="CSS" />
          <div className="card-body">
            <h3 className="card-title">CSS | CSS3</h3>
            <p className="card-text">Rating: <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
          </div>
        </div>

        <div className="card">
          <img src={js} className="card-img-top" alt="JavaScript" />
          <div className="card-body">
            <h3 className="card-title">JavaScript | Es6</h3>
            <p className="card-text">Rating: <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt/> </p>
          </div>
        </div>

        <div className="card">
          <img src={react} className="card-img-top" alt="React" />
          <div className="card-body">
            <h3 className="card-title">React Js</h3>
            <p className="card-text"> Rating: <FaStar /> <FaStar /> <FaStar /> <FaStar /> </p>
          </div>
        </div>

       
      </div>

      <h1 className="h1">Back-End Technologies</h1>
      <div className="container">
        <div className="card">
          <img src={expres} className="card-img-top" alt="Express" />
          <div className="card-body">
            <h3 className="card-title">Express Js</h3>
            <p className="card-text">Rating: <FaStar /> <FaStar /> <FaStar /> <FaStar /> </p>
          </div>
        </div>

        <div className="card">
          <img src={node} className="card-img-top" alt="Node" />
          <div className="card-body">
            <h3 className="card-title">Node Js</h3>
            <p className="card-text">Rating: <FaStar /> <FaStar /> <FaStar /> <FaStar /> </p>
          </div>
        </div>
      </div>

      <h1 className="h1">Databases</h1>
      <div className="container">
        <div className="card">
          <img src={mongodb} className="card-img-top" alt="MongoDB" />
          <div className="card-body">
            <h3 className="card-title">MongoDB</h3>
            <p className="card-text">Rating: <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt/> </p>
          </div>
        </div>

        <div className="card">
          <img src={mysql} className="card-img-top" alt="MySQL" />
          <div className="card-body">
            <h3 className="card-title">MySql</h3>
            <p className="card-text">Rating: <FaStar /> <FaStar /> <FaStar /> <FaStar /> </p>
          </div>
        </div>

        <div className="card">
          <img src={fire} className="card-img-top" alt="Firebase" />
          <div className="card-body">
            <h3 className="card-title">FireBase</h3>
            <p className="card-text">Rating: <FaStar /> <FaStar /> <FaStar /> </p>
          </div>
        </div>
      </div>

      <h1 className="h1">Programming Languages</h1>
      <div className="container">
        <div className="card">
          <img src={c} className="card-img-top" alt="C" />
          <div className="card-body">
            <h3 className="card-title">C</h3>
            <p className="card-text">Rating: <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt/> </p>
          </div>
        </div>

        <div className="card">
          <img src={pyhton} className="card-img-top" alt="Python" />
          <div className="card-body">
            <h3 className="card-title">Python</h3>
            <p className="card-text">Rating: <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar/> </p>
          </div>
        </div>

        <div className="card">
          <img src={js} className="card-img-top" alt="JavaScript" />
          <div className="card-body">
            <h3 className="card-title">Javascript</h3>
            <p className="card-text">Rating: <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar/> </p>
          </div>
        </div>

        <div className="card">
          <img src={java} className="card-img-top" alt="Java" />
          <div className="card-body">
            <h3 className="card-title">Java</h3>
            <p className="card-text">Rating: <FaStar /> <FaStar /> <FaStarHalfAlt/> </p>
          </div>
        </div>
      </div>
      
      <p className="pe">IDE and Basic Concepts</p>
      <div className="newskill">
        <h5>DBMS</h5>
        <h5>DSA</h5>
        <h5>OS</h5>
        <h5>Git & Github</h5>
        <h5>Vs Code</h5>
        <h5>Ms Office</h5>
        <h5>Netlify</h5>
      </div>
      
      <p className="pe">Soft Skills</p>
      <div className="newskill">
        <h5>Teamwork</h5>
        <h5>Communication</h5>
        <h5>Flexibility</h5>
        <h5>Problem-solving</h5>
        <h5>Positive attitude</h5>
        <h5>Punctual</h5>
      </div>
      
    </div>
<Footer/>
    </>


  );
};

export default Skill;