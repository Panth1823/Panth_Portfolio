import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Profile from "../assets/panth.webp";
import Image from "./Image";
import { motion } from "framer-motion";

const HoverRevealButton1 = () => {
  return (
    <div className="text-center  w-fit border-r-14 hover:scale-110">
      <motion.button
        className="relative text-white font-bold py-2 px-4 rounded-xl shadow-lg border-white backdrop-filter border-2 backdrop-blur-lg bg-opacity-10 border-opacity-50 overflow-hidden"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <span
          className="absolute inset-0 rounded-lg"
          style={{
            background:
              "radial-gradient(circle, rgba(0,128,128,0.8) 0%, rgba(32,201,151,0.5) 50%, rgba(0,128,128,0.8) 100%)",
            opacity: "0.9",
          }}
        ></span>
        <motion.span
          className="relative z-10"
          variants={{
            rest: { opacity: 1 },
            hover: { opacity: 0 },
          }}
          transition={{ duration: 0, delay: 0.3 }}
        >
          Portfolio
        </motion.span>
        <motion.span
          className="absolute inset-0 flex items-center justify-center z-10"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Scroll!
        </motion.span>
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-white z-10"
          style={{
            transform: "rotate(90deg)",
            transformOrigin: "bottom left",
            width: "200%",
            height: "200%",
          }}
          variants={{
            rest: { x: "-105%", opacity: 1 },
            hover: { x: "100%", opacity: 1 },
          }}
          transition={{ duration: 0.9 }}
        />
      </motion.button>
    </div>
  );
};

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="  max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row px-4">
        <div className=" flex flex-col justify-center h-full">
          <h2 className=" text-4xl sm:text-7xl font-bold text-white">
            I'm a FrontEnd Developer
          </h2>
          <p className=" text-gray-300 py-4 max-w-md">
            Passionate frontend web developer and aspiring fullstack
            developer/designer, dedicated to responsive web development with a
            focus on React. Committed to innovation, collaboration, and staying
            current with industry trends.
          </p>
          <div>
            <HoverRevealButton1 />

            <Link
              to="portfolio"
              smooth={true}
              className="group text-white w-fit px-5 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer duration-300 hover:scale-105"
            >
              Portfolio
              <span className=" group-hover:rotate-90 duration-300 ml-1">
                <MdKeyboardDoubleArrowRight size={20} className=" m-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex justify-end" cursor="pointer">
            <Image
              loading="lazy"
              src={Profile}
              alt="Profile"
              className="rounded-2xl mx-auto w-72 md:full hover:scale-110 duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
