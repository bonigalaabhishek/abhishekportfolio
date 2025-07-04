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
                    <Lottie animationData={ani}/>
                </div>
            </div>
        </div>
    )
}
 
export default Move
