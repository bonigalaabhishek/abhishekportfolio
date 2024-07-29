import "./Projects.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Meteors } from "../ui/Meteors";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Projects = () => {
  const ssroll = useRef();
  const ssroll2 = useRef();
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".center-part1 h1", {
      x: -300,
      opacity: 0,
      duration: 0.9,
    });
    tl.from(".center-part1 p", {
      x: -100,
      opacity: 0,
      duration: 0.8,
    });
    tl.from(
      ".center-part2",
      {
        opacity: 0,
        duration: 0.8,
        x: 200,
      },
      "-=0.8"
    );
    tl.from(".section1images i", {
      opacity: 0,
      y: 30,
      scale: 2,
      stagger: 0.15,
      duration: 0.6,
    });

    gsap.to(".icon", {
      transform: "translateX(-1100px)",
      duration: 10,
      repeat: -1,
      ease: "none",
      // stagger: {
      //   each: 0.5, // delay between the start of each animation
      // },
    });

    ScrollTrigger.create({
      trigger: ssroll.current,
      start: "top 50%",
      end: "top -50% ",
      scrub: 2,
      // markers: true,
      onEnter: () => {
        gsap.to(ssroll.current, { x: 0, opacity: 1, duration: 0.9 });
      },
      onLeave: () => {
        gsap.to(ssroll.current, { x: -500, opacity: 0, duration: 0.9 });
      },
      onEnterBack: () => {
        gsap.to(ssroll.current, { x: 0, opacity: 1, duration: 0.9 });
      },
      onLeaveBack: () => {
        gsap.to(ssroll.current, { x: -500, opacity: 0, duration: 0.9 });
      },
    });

    ScrollTrigger.create({
      trigger: "#maintab",
      start: "top 50%",
      // end: "top -50% ",
      scrub: 2,
      // markers: true,
      onEnter: () => {
        gsap.to("#maintab", { x: 0, opacity: 1, duration: 0.9 });
      },
      onLeave: () => {
        gsap.to("#maintab ", { x: -500, opacity: 0, duration: 0.9 });
      },
      onEnterBack: () => {
        gsap.to("#maintab", { x: 0, opacity: 1, duration: 0.9 });
      },
      onLeaveBack: () => {
        gsap.to("#maintab", { x: -500, opacity: 0, duration: 0.9 });
      },
    });
  }, []);

  const colors = [
    { start: "#FFD700", end: "#FF8C00", shadow: "#FFD700" },
    { start: "#B0E0E6", end: "#4682B4", shadow: "#B0E0E6" },
  ];
  let currentColorIndex = 0;

  function changeColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    gsap.to(".circle_block", {
      background: `radial-gradient(circle, ${colors[currentColorIndex].start}, ${colors[currentColorIndex].end})`,
      boxShadow: `0 0 20px ${colors[currentColorIndex].shadow}`,
      duration: 2,
    });
  }

  setInterval(changeColor, 3000);

  return (
    <div className="projectsmaincontainer">
      {/* <h1>Projects at pwc</h1> */}
      <section className="section1">
        <div className="center">
          <div className="center-part1">
            <h1>
              Over the last 2 years, my expertise has centered around
              JavaScript, encompassing code writing, refactoring, and seamless
              integration of RESTful APIs with frameworks like React,FlutterFlow
              and GSAP.{" "}
            </h1>
            <p>
              My experience extends beyond, having worked with diverse tech
              stacks.
            </p>
          </div>
          <div className="center-part2">
            <div className="circle_block">
              <div className="section1images2">
                <i className="fa-brands fa-react icon"></i>
                <i className="fa-brands fa-html5 icon"></i>
                <i className="fa-brands fa-git-alt icon"></i>
                <i className="fa-brands fa-node icon"></i>
                <i className="fa-brands fa-python icon"></i>
                <i className="fa-brands fa-css3-alt icon"></i>
                <i className="fa-solid fa-database icon"></i>
                <i className="fa-brands fa-js icon"></i>
                <i className="fa-brands fa-bootstrap icon"></i>
                <i className="fa-brands fa-react icon"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="section1images">
          <i className="fa-brands fa-react"></i>
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-git-alt"></i>
          <i className="fa-brands fa-node"></i>
          <i className="fa-brands fa-python"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-solid fa-database"></i>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-bootstrap"></i>
        </div>
      </section>

      <section className="section2">
        <div ref={ssroll} className="services">
          <h3>Projects</h3>
          <p>
            As a frontend developer, I have worked on various projects for
            different clients. Let's look at my projects, including a custom
            cursor feature and a GSAP-animated navigation bar.
          </p>
        </div>

        <div ref={ssroll2} id="maintab" className="section2-container">
          {/* <div className="item" id='tab1' >
            <div className="item-part1">
              <h2>Search engine optimization</h2>
              <h4><i className="fa-solid fa-arrow-up-right-from-square"></i>Learn More</h4>
            </div>
            <div className="item-part2">
              <img src="https://img.icons8.com/?size=100&id=23027&format=png&color=000000" alt="" />
            </div>
          </div>
         
          <div className="item" id='tab2'>
            <div className="item-part1">
              <h2>Search engine optimization</h2>
              <h4><i className="ri-arrow-right-up-line"></i>Learn More</h4>
            </div>
            <div className="item-part2">
              <img src="https://img.icons8.com/?size=100&id=23027&format=png&color=000000" alt="" />
            </div>
          </div>
          <div className="item" id='tab3'>
            <div className="item-part1">
              <h2>Search engine optimization</h2>
              <h4><i className="ri-arrow-right-up-line"></i>Learn More</h4>
            </div>
            <div className="item-part2">
              <img src="https://img.icons8.com/?size=100&id=23027&format=png&color=000000" alt="" />
            </div>
          </div>
          <div className="item" id='tab4'>
            <div className="item-part1">
              <h2>Search engine optimization</h2>
              <h4><i className="ri-arrow-right-up-line"></i>Learn More</h4>
            </div>
            <div className="item-part2">
              <img src="https://img.icons8.com/?size=100&id=23027&format=png&color=000000" alt="" />
            </div>
          </div> */}
          <div className="">
            <div className="w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-2 w-2 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </div>

                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  Banking Application
                </h1>

                <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                 Developed Coops application , containing details of customers, accounts, and transaction data.Provided support for application creation in React components and created and added functionalities to several components.

                </p>

                <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
                  Explore
                </button>

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-2 w-2 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </div>

                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                Axis Bank Application
                </h1>

                <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                Developed a  Axis Bank application where users can add a list of bills and manage all in one budget planner.•	Developed reusable components to reduce development time for future app development
                </p>

                <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
                  Explore
                </button>

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-2 w-2 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </div>

                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  HCG Hospital Application
                </h1>

                <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                Implemented login and registration flows using React and Redux, developed a feature-rich dashboard, managed hospital selection with Context API, and integrated various APIs for user authentication and location selection.
                </p>

                <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
                  Explore
                </button>

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
            </div>
          </div>
          <div className="">
            <div className="w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-2 w-2 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </div>

                <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                 NxtTrendz Application
                </h1>

                <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                Developed NxtTrendz, an eCommerce app  with product search, filters, and sorting. Created pages/routes with React Router, using Route, Switch, Link, state, and event handlers. Added YouTube video embeds.
                </p>

                <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
                  Explore
                </button>

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
