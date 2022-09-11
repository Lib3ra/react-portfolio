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
            <h2 className='text-xl'>a software developer based in Munich, Germany</h2>
            <p className='py-4 max-w-[700px]'>I'm interested in getting more experience in frontend development. <br></br>
            Other interests include UI/UX design, DevOps and backend development. </p>
            <div>
            <Link to="work" smooth={true} duration={500}>
            <button class= "btn btn-primary group w-64 rounded-full">
                View work
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                </span>
            </button>
            </Link> 
            </div>
        </div>

    </div>
  )
}

export default Home