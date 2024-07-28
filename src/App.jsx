import gsap from 'gsap';
import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { motion } from "framer-motion"
import './App.css'
import { Routes, Route,useLocation } from "react-router-dom";
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Header from './Components/Header/Header';
import LocomotiveScroll2 from "locomotive-scroll";
import HomePage from './Components/HomePage/HomePage';
import EclipseAnimation from './Components/Ec/EclipseAnimation';

gsap.registerPlugin(useGSAP)

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const location = useLocation();
  const LocomotiveScroll = new LocomotiveScroll2();
  //  var main=document.querySelector("#root")
  //  var cursor=document.querySelector("#cursor");
  const cursorRef = useRef(null);
  const mainRef = useRef(null);


  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  console.log(mousePosition)
  // const [cursorVariant, setCursorVariant] = useState("default");
  useGSAP(() => {
    var tloader = gsap.timeline(
      {
        onComplete: () => {
          setLoadingComplete(true);
          gsap.to(mainRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power3.out"
          });
          
        },
      }
    )

    tloader.from(".loader h3", {
      x: 80,
      opacity: 0,
      duration: 2,
      stagger: 0.1,
    })
    tloader.to(".loader h3", {
      opacity: 0,
      x: -50,
      duration: 1,
      stagger: 0.1
    })
    tloader.to(".loader", {
      opacity: 0,
      duration: 0.1
    })
    tloader.to(".loader", {
      display: "none",
      duration: 0,
    })

  })

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  useEffect(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        duration: 0.1,
        ease: "power3.out",
      });
    }
  }, [mousePosition]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  // const textEnter=()=>setCursorVariant("text")
  // const textLeave=()=>setCursorVariant("default")
  return (
    <>
      {/* <Lottie animationData={loadingani} className='loading'/> */}
      <div className="loader">
        <h3>Welcome</h3>
        <h3>to</h3>
        <h3>Myportfolio</h3>


        <EclipseAnimation />

      </div>

  { loadingComplete &&   (<div ref={mainRef} className="w-full min-h-screen text-white bg-zinc-900"
        style={{ opacity: 1 }}>
        <motion.div id="cursor" ref={cursorRef} />

        <Header />
      
        {/* <HomePage/> */}
        {/* <NewNav/>   */}
        <div className="mainpage">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>)}
    </>
  )
}

export default App



