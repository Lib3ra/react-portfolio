import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/kannabear.png'

import {Link} from 'react-scroll' 
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-8 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '50px'}} />
        </div>
        {/* menu */}
        
        <ul className='hidden md:flex'>
            <li>
                <Link to="home" smooth={true} duration={500}>
                Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500}>
                About
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>
                Skills
                </Link>
            </li>
            <li>
                <Link to="work" smooth={true} duration={500}>
                Work
                </Link>
            </li>
        </ul>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                Work
                </Link>
            </li>
        </ul>

        {/* socials */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0e76a8]'>
                    <a className='flex justify-between items-center w-full text-gray-300 font-bold' href="https://www.linkedin.com/in/andre-dang/" target="_blank">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]'>
                    <a className='flex justify-between items-center w-full text-gray-300 font-bold' href="https://github.com/Lib3ra" target="_blank">
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0f885a]'>
                    <a className='flex justify-between items-center w-full text-gray-300 font-bold' href="react-portfolio/CV_Lebenslauf_Dang_Andre(07_2022).pdf" target="_blank">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar