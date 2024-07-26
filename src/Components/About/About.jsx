import  { useRef} from 'react'
import './About.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);
 
const About = () => {
  const tech = useRef();
 
  useGSAP(() => {
    let tl = gsap.timeline()
 
    tl.from('header', {
      y: -50,
      opacity: 0,
      duration: 2,
      stagger: 0.15,
    })
 
    ScrollTrigger.create({
      trigger: tech.current,
      start: "top 75%",
      end: "top -75% ",
      scrub: 3,
      markers: true,
      stagger: 0.15,
      onEnter: () => {
        gsap.to(tech.current, { y: 0, opacity: 1, duration: 0.9, });
      },
      onLeave: () => {
        gsap.to(tech.current, { y: 50, opacity: 0, duration: 0.9 });
      },
      onEnterBack: () => {
        gsap.to(tech.current, { y: 0, opacity: 1, duration: 0.9 });
      },
      onLeaveBack: () => {
        gsap.to(tech.current, { y: 50, opacity: 0, duration: 0.9 });
      },
 
    });
 
 
 
 
  }, [])
 
 
 
  return (
    <div className='aboutmaincontainer'>
      <header className='Frontendheading '>
        <h1 className='headerHeading'>Frontend</h1>
        <h1 className='headerHeading'>Developer</h1>
      </header>
 
 
      <div  className="cartcontainer">
 
        <div className='aboutcart'>
          <h1>About</h1>
          <div className='details'>
            <h4>Software Developer with 2+ years of experience in developing and implementing user interfaces using HTML, CSS, JavaScript, and ReactJs. Proven track record of optimizing web pages for speed and scalability, ensuring responsive design, and collaborating effectively with cross-functional teams. Seeking to leverage my skills and experience to contribute to innovative projects at a leading MNC.</h4>
            <p>Experience in design and development of web-based applications using ReactJs My experience has given me the opportunity to hone my skills and develop an understanding of the unique challenges that come with working on projects for these types of clients.I have worked on projects for clients in industries ranging from healthcare to finance to retail, and my experience has helped me understand the different coding requirements for each type of project.</p>
          </div>
        </div>
        <div className='aboutcart'>
          <h1>Education</h1>
          <div className='details'>
            <h4> I Graduated with a degree in Electrical and Electronics Engineering from RVR & JC College of Engineering in 2017. I completed my schooling at Sri Chaitanya Junior Kalasala in 2013. .</h4>
           
          </div>
        </div>
        <div className='aboutcart'>
          <h1>Work Experience</h1>
          <div className='details'>
            <h4> I have been working as a Software Developer at PwC since 2022. Before that, I interned as a Software Developer Intern at NxtWave from 2021 to 2022, focusing on various technologies.</h4>
           
          </div>
        </div>
 
 
 
 
        <div className='aboutcart'>
          <h1>Techniques</h1>
          <div className='content-block-list' >
            <ul className='content-block-list-techniques' ref={tech}>
              <li className='content-block-list-item'>React</li>
              <li className='content-block-list-item'>Javascript</li>
              <li className='content-block-list-item'>React redux</li>
              <li className='content-block-list-item'>CSS</li>
              <li className='content-block-list-item'>Bootstrap</li>
              <li className='content-block-list-item'>Python Programming</li>
              <li className='content-block-list-item'>HTML</li>
              <li className='content-block-list-item'>NoSQL</li>
              <li className='content-block-list-item'>SQLite</li>
              <li className='content-block-list-item'>React Hooks</li>
              <li className='content-block-list-item'>GSAP</li>
              <li className='content-block-list-item'>Git</li>
              <li className='content-block-list-item'>Tailwind CSS</li>
            </ul>
          </div>
 
 
        </div>
 
      </div>
    </div>
  )
}
 
export default About
