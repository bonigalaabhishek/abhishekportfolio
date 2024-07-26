import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP);
const EclipseAnimation = () => {
useGSAP(()=>{
    const tleclipse = gsap.timeline({  yoyo: true });
    tleclipse.from("#moon", { x: 0, duration: 2, ease: "power2.inOut" });
    tleclipse.to("#moon", { x: -10, duration: 1, ease: "power2.inOut" });
    tleclipse.to("#glow feGaussianBlur", { attr: { stdDeviation: 15}, duration: 1 }, "-=0.5"); 
})
  return (
    <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='eclipsecontainer w-[200px] h-[200px] md:w-[500px] md:h-[500px]'>
    <svg width="500px" height="500px" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <circle cx="100" cy="100" r="40" fill="orange" filter="url(#glow)" id="sun"/>
  <circle cx="100" cy="100" r="40" fill="black" id="moon"/>
</svg>

  </div>
  )
}

export default EclipseAnimation