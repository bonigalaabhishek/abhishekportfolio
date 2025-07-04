// import React from 'react'
import Lottie from "lottie-react"
import ani3 from "/src/assets/ani3.json"
import { NavLink } from "react-router-dom"
const AboutPage = () => {
  return (
    <div className='w-full p-[4vw] bg-[#FFF8E8] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='Neue_Montreal text-[3vw] leading-[3.5vw] tracking-tight'>I craft responsive, high-performance web and mobile applications with React and React Native, emphasizing clean code, custom animations, and intuitive user experiences, ensuring each project is technically sound and visually engaging.</h1>
      <div className='w-full grid-cols-1 pt-5 mt-5 gap-3 md:flex md:gap-5 border-t-[1px] md:pt-10 md:mt-20 border-[#0d0f07] '>
        <div className='w-full flex flex-col justify-center items-center md:w-1/2'>
        <h1 className='text-[4vw]'>My Approach</h1>
        <button className=' flex items-center px-[3vw] py-[1.5vw] uppercase bg-zinc-900 rounded-full mt-3 md:mt-10 text-[2vw] text-white gap-5'> <NavLink to="/projects"> Read More</NavLink>
            <div className='w-2 h-2 rounded-full bg-white'></div>
        </button>
        </div>
        <div className="w-full h-[60vh] md:w-1/2 md:h-[70vh] bg-transparent bg-cover rounded-3xl overflow-hidden ">
        <Lottie className="w-full h-[60vh]" animationData={ani3}/>
           {/* <img className="w-full h-full bg-cover bg-cover" src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17-1536x922.jpg" alt="" /> */}
        </div>
       
      </div>
    </div>
  )
}
 
export default AboutPage
