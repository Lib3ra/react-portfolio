import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-base-100 text-neutral'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-primary'>About</p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-8'>
                <div className='text-left text-4xl font-bold'>
                    <p>Welcome to my portfolio! Feel free to take a look around. Cheers!</p> 
                </div>
                <div className='text-right'>
                    <p>I started out as a QA Engineer doing manual and automated tests, as well as test management. 
                        However, with my background in computer science, I also want to develop software without compromising on quality.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About