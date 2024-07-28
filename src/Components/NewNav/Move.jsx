import { useEffect, useState } from 'react'
import Lottie from 'lottie-react';
import ani from "/src/assets/ani.json";
import React from "react";
// import { EvervaultCard,Icon } from '../ui/EvervaultCard';
const Move = () => {
    const [rotate, setRotate] = useState(0)
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;
 
            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
            setRotate(angle)
        })
    })
    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed='-.7' className=" relative w-full h-full bg-cover bg-center  bg-gradient-to-b from-purple-900 to-black">
                
                <div className=" flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    {/* <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
                        <div className=" relative w-2/3 h-2/3  bg-zinc-900 rounded-full">
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 ">
                                <div className="w-10 h-10 bg-zinc-100 rounded-full">
                                </div>
                            </div>
 
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
                        <div className="relative w-2/3 h-2/3 flex items-center justify-center  bg-zinc-900 rounded-full">
                        <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 ">
                                <div className="w-10 h-10 bg-zinc-100 rounded-full">
                                </div>
                            </div>
                        </div>
                    </div> */}
                    
                    <Lottie animationData={ani}/>
                </div>
            </div>
        </div>
    )
}
 
export default Move
