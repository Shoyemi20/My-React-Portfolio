// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import proj1 from '../assets/proj1.png';
import proj7 from '../assets/proj7.jpg';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.jpg';
import proj5 from '../assets/proj5.png';
import proj6 from '../assets/proj6.png';
import proj2 from '../assets/proj2.jpg';

const Work = () => {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  const projects = [
    { 
      img: proj1, 
      link: 'https://mellow-figolla-1d57a3.netlify.app/', 
      github: 'https://github.com/Shoyemi20/gym', 
      title: 'Gym Website', 
      description: 'A gym website built with React, CSS', 
      tags: ['React', 'CSS'] 
    },
    { 
      img: proj7, 
      link: 'https://shoyemi20.github.io/Fylo/', 
      github: 'https://github.com/Shoyemi20/Fylo', 
      title: 'Fylo Landing Page', 
      description: 'A responsive landing page built with HTML and CSS.', 
      tags: ['HTML', 'CSS'] 
    },
    { 
      img: proj3, 
      link: 'https://lucky-yeot-fc918d.netlify.app/', 
      github: 'https://github.com/Shoyemi20/calculatorapp', 
      title: 'React Calculator', 
      description: 'A responsive React calculator app.', 
      tags: ['React', 'Javascript', 'CSS'] 
    },
    { 
      img: proj4, 
      link: 'https://dazzling-kangaroo-92ed5a.netlify.app/', 
      github: 'https://github.com/Shoyemi20/Foodie-web', 
      title: 'Food Ordering App', 
      description: 'A food ordering app built with React and tailwind CSS', 
      tags: ['React', 'Tailwind CSS', 'Firebase'] 
    },
    { 
      img: proj5, 
      link: 'https://lambent-lollipop-32d48c.netlify.app/', 
      github: 'https://github.com/Shoyemi20/Redux-app', 
      title: 'CRUD App', 
      description: 'A CRUD app for organizing and managing data across the web application.', 
      tags: ['React', 'REDUX', 'Bootstrap'] 
    },
    { 
      img: proj6, 
      link: 'https://imaginative-peony-1e1255.netlify.app/', 
      github: 'https://github.com/Shoyemi20/weatherAPI', 
      title: 'Weather App', 
      description: 'A weather app that fetches real-time data using an API.', 
      tags: ['React', 'JavaScript', 'API', 'CSS'] 
    },
    { 
      img: proj2, 
      link: 'https://illustrious-pika-139393.netlify.app/', 
      github: 'https://github.com/Shoyemi20/movie-search', 
      title: 'Movie Search App', 
      description: 'A simple React application that allows users to search for movies using the OMDb API and view details about each movie.', 
      tags: ['React', 'API', 'Tailwind CSS', 'Javascript'] 
    },
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="max-w-[1200px] mx-auto p-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="h-[200px] bg-gray-200 animate-pulse rounded-md"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div id="work" className="max-w-[1200px] mx-auto p-5">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Work</p>
        <p className="text-gray-400">Check out some of my recent work</p>
        <div className="flex gap-2 mt-4">
          {['All', 'React', 'REDUX', 'Firebase', 'CSS', 'JavaScript', 'API', 'Tailwind CSS', 'Bootstrap'].map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full ${
                filter === tag ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                       h-[200px] bg-cover relative"
            style={{ backgroundImage: `url(${project.img})` }}
            role="img"
            aria-label={`Screenshot of ${project.title}`}
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="opacity-0 group-hover:opacity-90 bg-[grey]/70 absolute flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">{project.title}</span>
              <p className="text-white text-sm text-center px-4">{project.description}</p>
              <div className="pt-8 text-center flex gap-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live
                  </button>
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
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