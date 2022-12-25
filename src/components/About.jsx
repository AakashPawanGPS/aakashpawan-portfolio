import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white p-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full mt-5">
        <div className="pb-4 hover:scale-105 smooth duration-300">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I am Software Developer currently working at <span className="text-cyan-400"><a target="_blank" rel="noreferrer" href="https://www.corestack.io/">Corestack</a></span> specialized in full stack development with AngularJS and Flask. Having a solid understanding of Javascript, Python, Java and Software Development fundamentals. Also an Enthusiastic Engieering graduate with an eager to contribute towards the Digital World.
        </p>

        <br />

        <p className="text-xl">
          Personally an Highly Motivated Individual, Quick Learner and a Team Player. I also posses Strong Communication and Leadership skills. I am inspired by making a positive impact by applying programming skills and my problem-solving abilities allow me to address challenges to achieve results.
        </p>
      </div>
    </div>
  );
};

export default About;
