import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-14 text-white  bg-black fixed px-4  bg-transparent backdrop-blur-md z-50">
      <div>
        <img
          src={logo}
          alt="logo"
          className=" w-28 cursor-pointer hover:scale-105 duration-200"
        />
      </div>
      <ul className=" hidden md:flex ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className=" px-4 cursor-pointer capitalize font-medium hover:scale-110 duration-200"
          >
            <Link to={link} smooth duration={300}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className=" cursor-pointer md:hidden pr-3 z-10  text-white"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      {nav && (
        <ul className=" flex  flex-col  justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className=" text-4xl py-6  capitalize cursor-pointer px-4 hover:scale-105 duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={300}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
