import React from "react";
import TaskTicker1 from "../assets/portfolio/taskticker1.png";
import Nexusnews from "../assets/portfolio/Nexusnews.png";
import Cartopia from "../assets/portfolio/Cartopia.png";
import FlashGenie from "../assets/portfolio/Flashgenie.png";
const Portfolio = () => {
  const Portfolios = [
    {
      id: 1,
      src: Cartopia,
      demo: "https://cartopia-store.vercel.app/",
      code: "https://github.com/Panth1823/Cartopia",
      name: "Cartopia",
      description: "A React-powered, feature-rich todo list app",
    },
    {
      id: 2,
      src: FlashGenie,
      demo: "https://flashgenie.vercel.app/",
      code: "https://github.com/Panth1823/FlashGenie",
      name: "FlashGenie",
      description:
        "A Meme app that allows users to share and have a good laugh",
    },
    {
      id: 3,
      src: Nexusnews,
      demo: "https://github.com/Panth1823/NexusNews",
      code: "https://github.com/Panth1823/NexusNews",
      name: "Nexusnews",
      description:
        "Delivers real-time updates and personalized news with an intuitive interface",
    },
    {
      id: 4,
      src: TaskTicker1,
      demo: "https://panth1823.github.io/Task_Ticker/",
      code: "https://github.com/Panth1823/Task_Ticker",
      name: "Task Ticker",
      description:
        "A productivity app for cultivating positive routines and boosting productivity effortlessly.",
    },
  ];
  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black via-black to-gray-800 w-full md:h-screen text-white "
    >
      <div className=" max-w-screen-lg p-4 pt-16 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8  pt-36">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="z-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 px-9 sm:px-0 justify-items-center">
          {Portfolios.map(({ id, src, demo, code, name, description }) => (
            <div key={id} className="card w-80 glass">
              <figure>
                <img
                  loading="lazy"
                  src={src}
                  alt="portfolio item"
                  className=" hover:scale-105 duration-300"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title p-1 text-xl">{name}</h2>
                <p className=" p-1 text-sm">{description}</p>
                <div className="card-actions justify-between p-2 pt-2">
                  <button
                    className="btn bg-gradient-to-r from-cyan-500 to-blue-500  text-white w-24 text-base  hover:scale-105 duration-100"
                    onClick={() => (window.location.href = demo)}
                  >
                    Demo
                  </button>
                  <button
                    className="btn bg-gradient-to-r from-cyan-500 to-blue-500  text-white w-24 text-base hover:scale-105 duration-100"
                    onClick={() => (window.location.href = code)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
