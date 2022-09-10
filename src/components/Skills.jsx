import React from 'react'

import ReactImg from '../assets/react_icon.png'
import JavaScript from '../assets/javascript_icon.png'
import Python from '../assets/python_icon1.png'
import Git from '../assets/github_icon.png'
import Tailwind from '../assets/tailwind_icon.png'
import Jira from '../assets/jira_icon.png'
import Cypress from '../assets/cypress_icon.png'
import Kotlin from '../assets/kotlin_icon.png'

const Skills = () => {
  return (
    <div name= 'skills' className='w-full h-screen bg-base-100 text-neutral'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-primary'>Skills</p>
                <p className='py-4 text-xl'>These are technologies I have worked with</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-neutral hover:scale-110 duration-300'>
                    <img className='my-4 w-20 mx-auto' src={ReactImg} alt="React Icon" style={{height:'80px'}} />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-neutral hover:scale-110 duration-300'>
                    <img className='my-4 w-20 mx-auto' src={JavaScript} alt="JS Icon" style={{height:'80px'}}/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-neutral hover:scale-110 duration-300'>
                    <img className='my-4 w-20 mx-auto' src={Python} alt="Python Icon" style={{height:'80px'}}/>
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-neutral hover:scale-110 duration-300'>
                    <img className='my-4 w-20 mx-auto' src={Git} alt="Git Icon" style={{height:'80px'}}/>
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-neutral hover:scale-110 duration-300'>
                    <img className='my-4 w-20 mx-auto' src={Tailwind} alt="Tailwind Icon" style={{height:'80px'}} />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-neutral hover:scale-110 duration-300'>
                    <img className='my-4 w-20 mx-auto' src={Jira} alt="Jira Icon" style={{height:'80px'}}/>
                    <p className='my-4'>Jira</p>
                </div>
                <div className='shadow-md shadow-neutral hover:scale-110 duration-300'>
                    <img className='my-4 w-20 mx-auto' src={Cypress} alt="Cypress Icon" style={{height:'80px'}}/>
                    <p className='my-4'>Cypress</p>
                </div>
                <div className='shadow-md shadow-neutral hover:scale-110 duration-300'>
                    <img className='my-4 w-20 mx-auto' src={Kotlin} alt="Kotlin Icon" style={{height:'80px'}}/>
                    <p className='my-4'>Kotlin</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills