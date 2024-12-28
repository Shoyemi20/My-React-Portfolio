// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineArrowUp } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [showScroll, setShowScroll] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className='border border-gray-600 bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center z-50'>
                <h1 className='text-3xl font-bold primary-color ml-4'>Esther Shoyemi</h1>
                <ul className='hidden md:flex'>
                    <li className='p-5'><a href='#about'>About</a></li>
                    <li className='p-5'><a href='#work'>Work</a></li>
                    <li className='p-5'><a href='#contact'>Contact</a></li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <div
                    className={`${
                        nav ? 'fixed top-0 left-0 w-[60%] h-full bg-[#202121] ease-in-out duration-500' 
                            : 'fixed top-0 left-[-100%]'
                    } z-50`}
                >
                    <h1 className='text-3xl primary-color m-4'>Esther Shoyemi</h1>
                    <ul className='p-8 text-2xl'>
                        <li className='p-2'><a href='#about' onClick={handleNav}>About</a></li>
                        <li className='p-2'><a href='#work' onClick={handleNav}>Work</a></li>
                        <li className='p-2'><a href='#contact' onClick={handleNav}>Contact</a></li>
                    </ul>
                </div>
            </div>
            {/* Scroll-to-Top Button */}
            {showScroll && (
                <div
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-primary-color p-3 rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                    <AiOutlineArrowUp size={24} color="#fff" />
                </div>
            )}
        </>
    );
};

export default Navbar;
