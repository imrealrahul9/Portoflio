"use client";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Spinner = () => {
  const navigate=useNavigate()
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl text-white">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#fff">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Software Engineer And Developer
              </textPath>
            </text>
          </motion.svg>
          <a>
          <Link onClick={()=>navigate('/contact')}
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Spinner;