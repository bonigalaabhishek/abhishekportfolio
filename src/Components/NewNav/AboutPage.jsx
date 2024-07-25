// import React from 'react'
 
const AboutPage = () => {
  return (
    <div className='w-full p-[4vw] bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='Neue_Montreal text-[3vw] leading-[3.5vw] tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates amet consectetur obcaecati ex itaque, tempora nisi, libero earum, perferendis atque commodi. Adipisci minima ipsam consequuntur.</h1>
      <div className='w-full grid-cols-1 pt-5 mt-5 gap-3 md:flex md:gap-5 border-t-[1px] md:pt-10 md:mt-20 border-[#0d0f07] '>
        <div className='w-full flex flex-col justify-center items-center md:w-1/2'>
        <h1 className='text-[4vw]'>My Approach</h1>
        <button className=' flex items-center px-[3vw] py-[1.5vw] uppercase bg-zinc-900 rounded-full mt-3 md:mt-10 text-[2vw] text-white gap-5'> Read More
            <div className='w-2 h-2 rounded-full bg-white'></div>
        </button>
        </div>
        <div className="w-full h-[50vh] md:w-1/2 md:h-[70vh] bg-white bg-cover rounded-3xl overflow-hidden ">
           <img className="w-full h-full bg-cover bg-cover" src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17-1536x922.jpg" alt="" />
        </div>
       
      </div>
    </div>
  )
}
 
export default AboutPage
