// import React from 'react'

const Footer = () => {
    return (
    <div className=' grid md:flex gap-5 w-full h-screen bg-zinc-900 md:p-20 p-5' >
      <div className='w-full grid md:w-1/2 font-mono md:flex flex-col justify-between h-full'>
        <div className="heading">
        <h1 className='text-[8vw] font-semibold uppercase leading-none md:-mb-6 -mb-1'>LETS</h1>
        <h1 className='text-[8vw] font-semibold uppercase leading-none md:-mb-6 -mb-1'>CONNECT-</h1>
        </div>
        <h1>Abhishek@</h1>
      </div>
      <div className='w-1/2 '>
      <h1 className='text-[5vw] font-semibold uppercase leading-none -mb-6'>SOCIAL
      </h1>
      <div className='dets font-mono mt-10'>
            <a className='block text-xl font-mono' href="">Facebook</a>
            <a className='block text-xl font-mono' href="">Linkedin</a>
            <a className='block text-xl font-mono' href="">Instagram</a>
        </div>
      </div>
    </div>
  )
}
 
export default Footer
