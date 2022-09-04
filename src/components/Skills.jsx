import React from 'react'

import ReactImg from '../assets/faye.gif'
import JavaScript from '../assets/haachama.jpg'
import Python from '../assets/NitocrisAssAF.png'
import Cypress from '../assets/Class-Berserker-Gold.png'
{/* Tailwind, Github , Bash, Kotlin */}

const Skills = () => {
  return (
    <div name= 'skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-300'>Skills</p>
                <p className='py-4'>// These are technologies I have worked with</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React Icon" style={{height:'80px'}} />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JS Icon" style={{height:'80px'}}/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={Python} alt="Python Icon" style={{height:'80px'}}/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={Cypress} alt="Cypress Icon" style={{height:'80px'}}/>
                    <p className='my-4'>Cypress</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills