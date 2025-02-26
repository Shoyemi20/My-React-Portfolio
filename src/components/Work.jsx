// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import proj1 from '../assets/proj1.png';
import proj7 from '../assets/proj7.jpg';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.jpg';
import proj5 from '../assets/proj5.png';
import proj6 from '../assets/proj6.png';

const Work = () => {
  const projects = [
    { img: proj1, link: 'https://mellow-figolla-1d57a3.netlify.app/' },
    { img: proj7, link: 'https://shoyemi20.github.io/Fylo/' },
    { img: proj3, link: 'https://lucky-yeot-fc918d.netlify.app/' },
    { img: proj4, link: 'https://dazzling-kangaroo-92ed5a.netlify.app/' },
    { img: proj5, link: 'https://lambent-lollipop-32d48c.netlify.app/' },
    { img: proj6, link: 'https://imaginative-peony-1e1255.netlify.app/' },
  ];

  return (
    <div id="work" className="max-w-[1200px] mx-auto p-5">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Work</p>
        <p className="text-gray-400">Check out some of my recent work</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                       h-[200px] bg-cover relative"
            style={{ backgroundImage: `url(${project.img})` }}
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="opacity-0 group-hover:opacity-90 bg-[grey]/70 absolute flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">Project</span>
              <div className="pt-8 text-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;

