import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Work = () => {
  return (
    <div className='my-14'>
      <div className='sm:px-24 px-10 sm:mt-28'>
        <h3 className='font-bold underline flex text-3xl font-mono'>My Work <HiArrowNarrowRight className='mx-3' size={40} /></h3>
      </div>

      <div className='flex justify-center flex-wrap text-center'>
        <div className='border-gray-300 shadow-md border-2 rounded-sm w-[85vw] sm:w-[25vw] flex flex-col m-4'>
          <img className='w-full rounded border-b-gray-200 border-2' loading='lazy' src="https://github.com/Omjavir/portfolio/blob/master/public/ls3.png?raw=true" alt="Image1" />
          <h3 className='sm:text-2xl text-xl font-semibold font-mono m-2'>Frest</h3>
          <div className='flex m-auto'>
            <a target={'_blank'} href="http://frest-fronend.vercel.app/"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Live</button></a>
            <a target={'_blank'} href="https://github.com/Omjavir/Frest_frontend"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Code</button></a>
          </div>
        </div>
        <div className='border-gray-300 shadow-md border-2 rounded-sm w-[85vw] sm:w-[25vw] flex flex-col m-4'>
          <img className='w-full rounded border-b-gray-200 border-2' loading='lazy' src="https://github.com/Omjavir/portfolio/blob/master/public/ls7.png?raw=true" alt="Image1" />
          <h3 className='sm:text-2xl text-xl font-semibold font-mono m-2'>Pagination</h3>
          <div className='flex m-auto'>
            <a target={'_blank'} href="http://pagination-with-reactjs.vercel.app/"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Live</button></a>
            <a target={'_blank'} href="https://github.com/Omjavir/pagination-with-reactjs"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Code</button></a>
          </div>
        </div>
        <div className='border-gray-300 shadow-md border-2 rounded-sm w-[85vw] sm:w-[25vw] flex flex-col m-4'>
          <img className='w-full rounded border-b-gray-200 border-2' loading='lazy' src="https://github.com/Omjavir/portfolio/blob/master/public/ls2.png?raw=true" alt="Image1" />
          <h3 className='sm:text-2xl text-xl font-semibold font-mono m-2'>Netflix UI CLone</h3>
          <div className='flex m-auto'>
            <a target={'_blank'} href="https://netflix-clone-delta-eight-87.vercel.app/"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Live</button></a>
            <a target={'_blank'} href="https://github.com/Omjavir/Netflix-clone"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Code</button></a>
          </div>
        </div>
      </div>
      <Link to={'/projects'}><button className='border-gray-500 rounded-md my-4 shadow-md border-2 p-2 sm:ml-[50%] ml-[35%]'>View more...</button></Link>
    </div>
  )
}

export default Work