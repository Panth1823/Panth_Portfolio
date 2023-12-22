import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full justify-center">
        <div className=" pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500 ">
            About Me
          </p>
        </div>
        <p className="  text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ut saepe
          ducimus praesentium molestias consequatur a at assumenda ea, modi
          earum? Eaque vel fugit exercitationem itaque, ad maiores error
          quibusdam odit labore suscipit, dicta, est rerum ut nobis? Cum fugiat
          id, rerum natus reiciendis a earum ut quas minima tempora.
        </p>
        <br />
        <p className=" text-xl ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam non,
          quis, repellendus nam explicabo quo fugit autem illum sapiente
          voluptate perferendis reiciendis voluptatibus nobis omnis voluptatum
          incidunt veniam ad fugiat similique possimus numquam expedita, error
          esse. Ratione enim nulla molestiae porro exercitationem doloribus
          temporibus, explicabo inventore nisi est dolorum tenetur!
        </p>
      </div>
    </div>
  );
};

export default About;
