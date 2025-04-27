import React from 'react'
import '../Style/Education.css'
import cwr from'../Assets/cwr.jpeg'
import pyhtonbasic from '../Assets/python_basic certificate_page-0001.jpg'
import intern from '../Assets/Tarun Pal  cognfyz_page-0001.jpg'
import ducat from '../Assets/Tarun ducat_page-0001 (1).jpg'
import Footer from '../Components/Footer.jsx'



const Education = () => {
  return (
    <>
       <section class="pimg1" className='w-100 h-100' >
      <div class="ptext">
        <span class="textBg"> Schooling </span>     
      </div>
    </section>
    <section class="section section-light" id='schooling'>
     
      <p>
        <div className='xx'>
        <button className='X'> Class-X<sup>th</sup></button>
        <h4 className='year'> 2017-2018 | CGPA - 7.89</h4>
        <h4>Board of Higher and Secondary Education U.P (Uttar Pradesh)</h4>

        </div>

        <div className='xii'>
        <button className='X'> Class-XII<sup>th</sup></button>
        <h4 className='year'> 2019-2020 | CGPA - 7.7</h4>
        <h4>Board of Higher and Secondary Education U.P (Uttar Pradesh)</h4>

        </div>
      </p>
    </section>
    <section class="pimg2">
      <div class="ptext" id='ug'>
        <span class="textBg">Under Graduation</span>
      </div>
    </section>
    <section class="section section-dark"id='ug2' >
      <p>
      <div className='bca'>
        <button className='X'> BCA - Bachelors of Computer Application</button>
        <h4 className='year'> 2020-2023 | CGPA - 8.49</h4>
        <h4> Guru Gobind Singh Indraprastha University , Delhi</h4>

        </div>
      </p>
    </section>
    <section class="pimg3">
      <div class="ptext" id='pg'>
        <span class="textBg"> Post Graduation</span>
      </div>
    </section>
    <section class="section section-dark" id='pg2'>
      <p>
      <div className='mca'>
        <button className='X'> MCA - Masters of Computer Application</button>
        <h4 className='year'> 2023-2025 | CGPA - 6.9</h4>
        <h4> Ajay Kumar Garg Engeneering Collage (AKTU), Ghaziabad</h4>

        </div>
      </p>
    </section>
    <section class="pimg1">
      <div class="ptext" id='certification'>
        {/* <span class="textBg"> Internship </span> */}
        
      </div>

      <div className="intern">
      <span class="textBg"> Internship </span>

      <h3>Web devloper intern</h3>
        <p>I have Completed an one month Virtual Intrenship from Cognifyz Technologies where i gain the valueable knowledge about web devlopment basics like HTML, CSS and Javascript and I  also worked on libraries like React Js . </p>
        <img src={intern} alt="" srcset="" height={700} width={700} />
      </div>

      
    </section>

    <section class="pimg2">
      <div class="ptext" id='certification'>
        {/* <span class="textBg"> Internship </span> */}
        
      </div>

      <div className="intern" id='course'>
      <span class="textBg"> Course </span>

      <h3>Python Full stack Devlopment</h3>
        <p>I have Completed an One year Python full stack course where i learn about the backend and frontend devlopment as an aspiring student.  </p>
        <img src={ducat} alt="" srcset="" height={700} width={700} />
      </div>

      
    </section>

    <section class="pimg3">
      <div class="ptext" id='certification'>
        {/* <span class="textBg"> Internship </span> */}
        
      </div>

      <div className="intern" id='certi'>
      <span class="textBg"> Certificate </span>

      <h3>Python basic HackerRank</h3>
        <p>I have earned an certificate of pyhton basic form HackerRank through solving problems on hackerrank regularly.  </p>
        <img src={pyhtonbasic} alt="" srcset="" height={700} width={700} />
      </div>

      
    </section>
    <section class="pimg2">
      <div class="ptext" id='certification'>
        {/* <span class="textBg"> Internship </span> */}
        
      </div>

      <div className="intern" id='cwr'>
      <span class="textBg"> Certificate </span>

      <h3> 40 days Live React js javaScript Bootcamp</h3>
        <p>I have attended the 40 days live Javascript and React js Bootcamp from the code With Random (CWR) where ia gain the valuable Knowledge of JavaScript and React Js </p>
        <img src={cwr} alt="" srcset="" height={700} width={700} />
      </div>

      
    </section>
    <Footer/>
    </>
  )
}

export default Education
