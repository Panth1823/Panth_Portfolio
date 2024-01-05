import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 pt-32 mx-auto flex flex-col w-full h-full justify-center">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500 ">
            About Me
          </p>
        </div>
        <p className="  text-2xl mt-14 tracking-wide leading-relaxed ">
        👋 Hello, I'm Panth Shah, a results-driven web developer with a passion for crafting seamless and visually stunning digital experiences. Proficient in HTML, CSS, and JavaScript, I specialize in translating creative ideas into functional, user-friendly websites.💻✨
        </p>
        <br/>
        <p className=" text-2xl tracking-wide leading-relaxed pt-2">
        🚀 I leverage my knowledge in React and Tailwind CSS to bring ideas to life, creating dynamic and responsive web applications. Join me on this journey of technology and design convergence.🌐🎨
        </p>
      </div>
    </div>
  );
};

export default About;
