import React from 'react'

const Hero = () => {
  return (
    <div className='flex-col justify-center text-center sm:pt-40 pt-28'>
      {/* <div className='sm:w-[50vw] bg-blue-500 sm:p-20 p-2 w-[100vw] mx-auto flex justify-center'>
        <img className='rounded-t-full px-10' src="https://github.com/Omjavir/portfolio/blob/master/public/hero.jpg?raw=true" alt="Hero" />
      </div>
      <div className='sm:w-[50vw] w-full bg-yellow-500'>
        <h2>Hi. I'm Om.</h2>
        <h3>I'm a Front-end developer and coder with a keen eye for creating and bringing innovative products to life.</h3>
      </div> */}
      <h2 className='text-4xl sm:text-5xl font-serif'>Hi. I'm <b className='underline'>Om</b>.</h2>
      <h3 className='text-3xl sm:text-4xl font-mono m-5'>I'm a Front-end developer and coder with a keen eye for creating and bringing innovative products to life.</h3>
    </div>
  )
}

export default Hero