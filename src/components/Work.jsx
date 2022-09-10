import React from 'react'

const Work = () => {
  return (
    <div name= 'work' className='w-full h-screen text-neutral bg-base-100'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-primary'>Work</p>
                <p className='py-4 text-xl'>Check out some of my recent work</p>
            </div>
            {/* Container */}
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4'>
              {/* Grid item */}
                {/* <div style={{backgroundImage: `url(${UnitConverter})`}} className='shadow-lg shadow-neutral group container rounded-md flex justify-center items-center mx-auto content-div'>
                  
                  -- Hover effects --
                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                      Unit Converter
                    </span>
                    <div className='pt-8 text-center'>
                      <a href="https://github.com/Lib3ra/UnitConverter/tree/master" target="_blank">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                      </a>
                    </div>
                  </div>
                </div> */}

                <div class="card group w-96 bg-base-100 shadow-xl shadow-neutral hover:bg-primary text-neutral">
                  <div class="card-body">
                    <h2 class="card-title">React Portfolio</h2>
                    <p>Portfolio website. <br></br>(React, TailwindCSS, DaisyUI)</p>
                    <div class="card-actions justify-end">
                      <a href="https://github.com/Lib3ra/react-portfolio" target="_blank">
                        <button class="btn btn-base-100 text-base-100">Code</button>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="card group w-96 bg-base-100 shadow-xl shadow-neutral hover:bg-primary text-neutral">
                  <div class="card-body">
                    <h2 class="card-title">Unit Converter</h2>
                    <p>Simple Android app to convert imperial and metric units. <br></br>(Kotlin, AndroidStudio)</p>
                    <div class="card-actions justify-end">
                      <a href="https://github.com/Lib3ra/UnitConverter" target="_blank">
                        <button class="btn btn-base-100 text-base-100">Code</button>
                      </a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work