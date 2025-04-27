import React, {useRef} from 'react'
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import '../Style/Home.css'
import Footer from '../Components/Footer.jsx'


const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 1000, {
      duration: 2,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
 
  const animationProjectsCount = () => {
    animate(0, 20, {
      duration: 2,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };


  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
        delay: 100,
      },
    },

    button: {
      initial: {
        y: "100%",
        opacity: 0,
      },
      whileInView: {
        y: 1,
        opacity: 1,
      },
    },
  };

  
  return (
    <div id='home'>
      
<div>
      <div className="heading">
            <motion.h1 {...animations.h1}>
              Hii, I Am <br /> <b>Tarun Pal</b>
            </motion.h1>
            <Typewriter
              options={{
                strings: ["A Web Developer , Designer and A programer"],
                autoStart: true,
                loop: true,
                wrapperClassName: "typewriter",
              }}
            />
            <div className="mail">
              <a href="mailto:tpal59200@gmail.com"> Hire Me </a>
              <a href="https://drive.google.com/file/d/10rucWyFfDpbipKmAXXMUfP-aY4UIrrxX/view?usp=drive_link">
                {" "}
                Get Resume <BsArrowUpRight />{" "}
              </a>
            </div>
           
          </div>

          <div className="heading2">
          {/* <aside>
            <a href="https://github.com/Tarunpal10" target='_blank' rel="noreferrer"><FaGithubSquare /></a> <br />
         <a href="https://www.linkedin.com/in/tarun-pal10/" target='_balnk' rel="noreferrer"><FaLinkedin /></a> <br />
         <a href="https://www.hackerrank.com/profile/tpal59200" target='_blank' rel="noreferrer"><FaHackerrank/></a>
            </aside> */}

            <div id="mained">
              <article className="connctiom" id="blck">
                <p>
                  +{" "}
                  <motion.span
                    whileInView={animationClientsCount}
                    ref={clientCount}
                  ></motion.span>
                </p>
                <span>Connections on Linkedin</span>
              </article>

              <article className="projects" id="blck">
                <p>
                  +{" "}
                  <motion.span
                    whileInView={animationProjectsCount}
                    ref={projectCount}
                  ></motion.span>
                </p>
                <span>Projects Done </span>
              </article>
            </div>

           
          </div>

          </div>
 <Footer></Footer>
    </div>
  )
}

export default Home
