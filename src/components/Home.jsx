import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Resume from '../assets/AakashPawanGPS_CV.pdf'

const Home = () => {  
  return (
    <div
      name="home"
      className="md:mt-50 h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:p-20">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            I'm a Software Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Currently working as a Full Stack Developer specialized in Javascript and Python. A fresher with lots of eager to develop. A motivated personality and a team player. 
          </p>

          <div className="flex gap-3">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <a
              href={Resume}
              download
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer hover:scale-105 smooth duration-200"
            >
              Resume
            </a>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-3/5 md:w-full shadow-lg shadow-slate-600 hover:shadow-2xl hover:shadow-cyan-600 smooth duration-150"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
