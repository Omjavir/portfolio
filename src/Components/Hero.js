import React from 'react'

const Hero = () => {
  return (
    <div className='bg-red-300 flex sm:flex-row flex-col justify-center'>
      <div className='sm:w-[40vw] sm:p-20 p-2 w-[100vw] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500'>
        <img className='m-auto rounded-3xl h-96' src="https://github.com/Omjavir/portfolio/blob/master/public/hero.png?raw=true" alt="Hero" />
      </div>
      <div className='sm:w-[40vw] w-full bg-yellow-500'>
        <h2>Hi. I'm Om.</h2>
        <h3>I'm a Front-end developer and coder with a keen eye for creating and bringing innovative products to life.</h3>
      </div>
    </div>
  )
}

export default Hero