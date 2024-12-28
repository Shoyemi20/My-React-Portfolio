// eslint-disable-next-line no-unused-vars
import React from 'react';
import aboutImg from '../assets/about.jpg';

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
              Hello! I'm Esther Shoyemi, a passionate and dedicated Frontend Developer with over 2 years of experience in web development. I specialize in creating visually appealing, user-friendly, and responsive web interfaces. 
              <br /><br />
              My journey in tech has been driven by my love for creativity and problem-solving. I thrive in collaborative environments and enjoy bringing innovative ideas to life. As an artistic individual, I aim to bridge the gap between functionality and aesthetics, ensuring every project not only works seamlessly but also looks stunning.
              <br /><br />
              I'm currently pursuing opportunities to further enhance my skills and contribute to impactful projects. When I'm not coding, you can find me exploring art, writing technical articles, or brainstorming new ways to improve user experiences.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img className="mx-auto rounded-3xl py-8 md:py-0 hidden sm:block" src={aboutImg} width={300} height={300} alt="About" />
        </div>
      </div>
    </div>
  );
};

export default About;

