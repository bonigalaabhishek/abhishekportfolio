import { motion } from 'framer-motion'
 
const TextscrollPage = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".003" className='w-full py-14 md:py-20 rounded-tl-3xl rounded-tr-3xl bg-[#A4161A]'>
        <div className="text gap-10 overflow-hidden border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap  ">
            <motion.h1 intilal={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[20vw] py-1  leading-none font-mono uppercase font-bold'>FRONTEND DEVELOPER</motion.h1>
            <motion.h1 intilal={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[20vw] py-1  leading-none font-mono uppercase font-bold'>FRONTEND DEVELOPER</motion.h1>
            {/* <motion.h1 intilal={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[20vw] py-1  leading-none font-mono uppercase font-bold'>FRONTEND DEVELOPER</motion.h1> */}
        </div>
     
    </div>
  )
}
 
export default TextscrollPage

