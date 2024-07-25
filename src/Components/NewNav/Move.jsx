import { useEffect, useState } from 'react'
 
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
        <div className='eyes w-full h-screen overflow-hidden bg-cover flex justify-center items-center'>
            {/* bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] */}
            <div data-scroll data-scroll-speed='-.7' className=" relative w-full h-full bg-cover bg-center  ">  
                {/* <div className=" flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
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
                    </div>
                </div> */}
                                        <div className='flex p-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
      <iframe 
        src="https://giphy.com/embed/8QGTPddH9geo4Ty2kK" 
        width="374" 
        height="480" 
        style={{ border: '0' }} 
        frameBorder="0" 
        className="giphy-embed" 
        allowFullScreen
        title="Giphy Embed"
      ></iframe>
      <p>
        <a href=""></a>
      </p>
    </div>
            </div>
        </div>
    )
}
 
export default Move
