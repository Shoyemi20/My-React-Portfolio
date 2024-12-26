// eslint-disable-next-line no-unused-vars
import React from 'react';
import heroimage from '../assets/profileme.jpg';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black'>
      <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w[400px]'>
        <img src={heroimage} alt='hero image'/>

      </div>

      <div className='col-span-2 px-5 my-auto'>

        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span className="primary-color">
                I'm a
            </span> <br />
            <TypeAnimation
                sequence={[
                    "Frondend Dev",
                     1000,
                    "Techincal Writer",
                     1000,
                    "Consultant",
                     1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
            />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-x1">
            My name is Esther Shoyemi and I have 2+ years experience in web development.
        </p>
        <div className='my-8'>
            <a href="/" className="px-6 py-3 w-full rounded-xl mr-4
            bg-gradient-to-br from-orange-500 to-pink-500 text-white">
                Download Cv
            </a>
            <a href="contact" className="px-6 py-3 w-full rounded-xl 
                    border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500
                    text-white hover:border-none">
                        Contact
                    </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;
