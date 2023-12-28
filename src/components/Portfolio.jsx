import React from "react";
import TaskTicker1 from "../assets/portfolio/taskticker1.png";
import Nexusnews1 from "../assets/portfolio/Nexusnews1.png";
import Figma from "../assets/portfolio/Flashcard.png";
import Cybernerd from "../assets/portfolio/Cybernerd.png";
const Portfolio = () => {
  const Portfolios = [
    {
      id: 1,
      src: TaskTicker1,
      demo: "https://panth1823.github.io/Task_Ticker/",
      code: "https://github.com/Panth1823/Task_Ticker",
    },
    {
      id: 2,
      src: Nexusnews1,
      demo: "https://panth1823.github.io/Project1/",
      code: "https://github.com/Panth1823/NexusNews",
    },
    {
      id: 3,
      src: Cybernerd,
      demo: "https://panth1823.github.io/CyberNerd/",
      code: "https://github.com/Panth1823/CyberNerd",
    },
    {
      id: 4,
      src: Figma,
      demo: "https://www.figma.com/community/file/1261523555389492698",
      code: "https://github.com/Panth1823/Project1",
    },
  ];
  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black via-black to-gray-800 w-full md:h-screen text-white "
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className=" py-6">Check out some of my work right here</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-2 gap-8 px-12 sm:px-0">
          {Portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className=" shadow-md shadow-gray-300 rounded-lg">
              <img
                className=" rounded-md duration-200 hover:scale-105"
                src={src}
                alt="node"
              />
              <div className="flex items-center justify-center">
                <button
                  className=" w-1/2 px-6
               py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => (window.location.href = demo)}
                >
                  Demo
                </button>
                <button
                  className=" w-1/2 px-6
               py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => (window.location.href = code)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
