import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll' 
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-base-100'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-neutral'>
            <p>Hi, <br></br> my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold'>André Dang</h1>
            <h2>I'm an aspiring software developer</h2>
            <p className='py-4 max-w-[700px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div>
            <button class= "btn btn-primary group w-64 rounded-full">
                <Link to="work" smooth={true} duration={500}>
                View work
                </Link> 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                </span>
            </button>
            </div>
        </div>

    </div>
  )
}

export default Home