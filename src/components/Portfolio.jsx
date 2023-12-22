import React from "react";
import PortfolioNode from "../assets/portfolio/installNode.jpg";
const Portfolio = () => {
  const Portfolios = [
    { id: 1, src: PortfolioNode },
    { id: 2, src: PortfolioNode },
    { id: 3, src: PortfolioNode },
    { id: 4, src: PortfolioNode },
    { id: 5, src: PortfolioNode },
    { id: 6, src: PortfolioNode },
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

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Portfolios.map(({ id, src }) => (
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
                >
                  Demo
                </button>
                <button
                  className=" w-1/2 px-6
               py-3 m-4 duration-200 hover:scale-105"
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
