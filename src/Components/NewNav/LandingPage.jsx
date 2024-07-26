import { useRef } from 'react';                                                                                             
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);
 
const LandingPage = () => {
 
    const maintitleRef=useRef(null)
    const maintitleRef2=useRef(null)
    const titleRef = useRef(null);
    const imageRef = useRef(null);
 
    useGSAP(() => {
        let tl=gsap.timeline()
        tl.add([
            gsap.fromTo(titleRef.current, { opacity: 0, y: 0,x:0 }, { opacity: 1, y: -10,x:0, duration: 1 , delay: 1}),
            gsap.fromTo(imageRef.current, { opacity: 0,y:30,x:0 }, { y:0,x:0,opacity: 1, duration: 1, delay: 1 })
        ])
       
        gsap.fromTo(maintitleRef.current, { opacity: 0, y: 50,x:0 }, { opacity: 1, y: 0, duration: 1});
        gsap.fromTo(maintitleRef2.current, { opacity: 0.3, y: 0,x:"0%"}, { x:"30%", y: "90%",opacity: 1, duration: 4, delay:1});
        // gsap.fromTo(subtitleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });
       
      }, []);
 
 
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className='flex justify-center flex-col w-full h-screen bg-zinc-900 p-9 '>
            <div className="developername flex justify-center items-center md:items-center flex-col  md:mt-20 ">
            <div className="masker flex justify-center flex-start md:p-2" >
                            <div className=" w-full justify-center items-center flex flex-col relative md:grid">
                            <h1 ref={maintitleRef}  className="uppercase  text-5xl md:text-[7.5vw] font-bold leading-[6vw] tracking-tighter flex"  >Abhi <span><h1 ref={maintitleRef2} className="relative uppercase text-5xl md:text-[7.5vw] font-bold leading-[6vw] tracking-tighter" >shek</h1>
                            </span></h1>
                            <img ref={imageRef} className='relative w-full h-full bottom-[20vw] md:-right-[7vw] md:bottom-[10vw]  md:w-[25vw] md:h-[25vw] ' src="./src/assets/abhipic.png" alt="Your Name" />
                            <h1 ref={titleRef}  className="absolute md:relative uppercase text-5xl md:text-[7.5vw] bottom-[12vw] font-bold leading-[6vw] tracking-tighter" >Bonigala</h1>
                            </div>
                            </div>
    
            </div>
            <div className='border-t-[1px] border-zinc-800 mb-30   flex justify-between items-center py-5 px-20'>
                {["For Pricewaterhouse Cooper", "From the first pitch to last"].map((item, index) => {
                    return (
                        <p className="text-[1.5vw] font-mono tracking-tight leading-none" key={index}>{item}</p>
                    )
                })}
       
            </div>
 
        </div>
    )
}
 
export default LandingPage
