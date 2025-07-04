import { motion } from 'framer-motion'
import {useState} from 'react'
import Lottie from 'lottie-react';
import ani4 from "/src/assets/ani4.json";
import ani6 from "/src/assets/ani6.json";
 
const ProjectPage = () => {
    const [hover, setHover] = useState(false)
    const [hover2, setHover2] = useState(false)
 
    return (
        <div className='w-full py-10 bg-[#000000]'>
            <div className='w-full px-10 border-b-[1px] border-zinc-700 md:pb-20 pb-10'>
                <h1 className='text-3xl md:text-5xl  font-[Neue_Montreal] tracking-tight'>Featured Projects</h1>
 
            </div>
            <div className='md:px-20 px-5'>
                <div className=" grid md:flex gap-10 cards w-full mt-10">
                    <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="cardcontainer relative w-full h-[50vh] md:w-1/2 md:h-[75vh] ">
                    <h1 className='absolute flex overflow-hidden left-full text-[yellow] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-5xl tracking-tighter'>
                    {"FRONTEND".split("").map((item,index)=><motion.span initial={{y:"100%"}} animate={hover ? {y:"0"}:{y:"100%"}} transition={{ease:[0.22, 1, 0.36, 1],delay:index*0.1}}  className="inline-block" key={index}>{item}</motion.span>)}
 
                    </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                           <Lottie animationData={ani4}/>
                            {/* <img className='w-full h-full bg-cover' src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17-1536x922.jpg" alt="" /> */}
                        </div>
                    </div>
                    <div onMouseEnter={()=>setHover2(true)} onMouseLeave={()=>setHover2(false)} className="cardcontainer  relative w-full h-[50vh] md:w-1/2 md:h-[75vh] ">
                    <h1 className='absolute flex overflow-hidden right-full text-[yellow] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none text-5xl tracking-tighter'>
                    {"DEVELOPER".split("").map((item,index)=><motion.span initial={{y:"100%"}} animate={hover2 ? {y:"0"}:{y:"100%"}} transition={{ease:[0.22, 1, 0.36, 1],delay:index*0.1}}  className="inline-block" key={index}>{item}</motion.span>)}
                    </h1>
 
                        <div className="card w-full h-full rounded-xl overflow-hidden">
                        {/* <img className='w-full h-full bg-cover' src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17-1536x922.jpg" alt="" /> */}
                        <Lottie animationData={ani6}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default ProjectPage
