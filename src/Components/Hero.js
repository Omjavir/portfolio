import React from 'react'
import hero from '../Assets/hero.jpeg'

const Hero = () => {
  return (
    <div className='sm:flex-row flex-col flex justify-center items-center align-middle text-center sm:pt-5 pt-10'>
      <div className='sm:w-[50vw] sm:p-20 p-2 w-full mx-auto flex justify-center'>
        <img className='rounded-full' loading='lazy' src={hero} alt="Hero" />
      </div>
      <div className='sm:w-[50vw] w-full  sm:pt-0 pt-10'>
        <h2 className='text-4xl sm:text-5xl font-serif'>Hi. I'm <b className='underline'>Om</b>.</h2>
        <h3 className='text-3xl sm:text-4xl font-mono m-5'>I'm a Front-end developer and coder with a keen eye for creating and bringing innovative products to life.</h3>
      </div>

    </div>
  )
}

export default Hero