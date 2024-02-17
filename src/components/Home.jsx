import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Profile from "../assets/panth.webp";
import Image from "./Image";
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
          <div className="flex justify-end">
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
