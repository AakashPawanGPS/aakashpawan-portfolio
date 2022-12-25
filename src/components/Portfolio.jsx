import React from "react";
import enhanceObjectDetection from "../assets/portfolio/enhanceObjectDetection.jpg";
import taskTracker from "../assets/portfolio/taskTracker.png";
import eCommerce from "../assets/portfolio/eCommerce.png";
import travalong from "../assets/portfolio/travalong.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: enhanceObjectDetection,
      title: "Enhanced Object detection in Autonomous Driving",
      code: "http://www.gisscience.net/VOLUME-9-ISSUE-6-2022/",
      demo: "http://www.gisscience.net/VOLUME-9-ISSUE-6-2022/",
    },
    {
      id: 2,
      src: travalong,
      title: "Responsive Travel Companion Web Application",
      code: "https://github.com/AakashPawanGPS/travalong",
      demo: "https://travalong-travelcompanion.netlify.app/",
    },
    {
      id: 3,
      src: eCommerce,
      title: "Responsive E-Commerce Web Application",
      code: "https://github.com/AakashPawanGPS/E-Commerce_Website",
      demo: "https://e-commerce-app-74bb4.web.app/",
    },
    {
      id: 4,
      src: taskTracker,
      title: "Responsive Travel Companion Web Application",
      code: "https://github.com/AakashPawanGPS/taskTracker",
      demo: "https://github.com/AakashPawanGPS/taskTracker",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b p-10 from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my projects here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, code, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <p className="p-5">{title}</p>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-40 w-80"
              />
              <div className="flex items-center justify-center">
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 text-center m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-2 text-center m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
