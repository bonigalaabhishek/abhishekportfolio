// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faDownload, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  const email = "bonigalaabhishek@gmail.com";
  return (
    <div className=" grid md:flex gap-5 w-full h-screen bg-zinc-900 md:p-20 p-5">
      <div className="w-full grid md:w-1/2 font-mono md:flex flex-col justify-between h-full">
        <div className="heading">
          <h1 className="text-[8vw] font-semibold uppercase leading-none md:-mb-6 -mb-1">
            LETS
          </h1>
          <h1 className="text-[8vw] font-semibold uppercase leading-none md:-mb-6 -mb-1">
            CONNECT-
          </h1>
        </div>
        <div className="flex flex-col space-y-4 text-white text-lg">
          {/* Email */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Email: bonigalaabhishek@gmail.com</span>
          </a>
          <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPhone} />
          <span>Contact: +91-8008215356</span>
          </div>
        </div>
      </div>
      <div className="w-1/2 ">
        <h1 className="text-[5vw] font-semibold uppercase leading-none -mb-6">
          SOCIAL
        </h1>
        <div className="dets font-mono mt-10 space-y-4">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/abhishek-bonigala-9a6a199b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span>LinkedIn</span>
          </a>

          {/* Resume Download */}
          <a
            href="./Bonigalaabhisresume.pdf"
            download="Abhishek_Resume.pdf"
            className="flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
