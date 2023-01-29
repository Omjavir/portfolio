import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import ls3 from '../Assets/ls3.png'
import ls2 from '../Assets/ls2.png'
import ls7 from '../Assets/ls7.png'

const Work = () => {
  function handleClick() {
    window.location.href = '/projects';
  }
  return (
    <div className='my-14'>
      <div className='sm:px-24 px-10 sm:mt-28'>
        <h3 className='font-bold underline flex text-3xl font-mono'>My Work <HiArrowNarrowRight className='mx-3' size={40} /></h3>
      </div>

      <div className='flex justify-center flex-wrap text-center'>
        <div className='border-gray-300 shadow-md border-2 rounded-sm w-[85vw] sm:w-[25vw] flex flex-col m-4'>
          <img className='w-full rounded border-b-gray-200 border-2' loading='lazy' src={ls3} alt="Image1" />
          <h3 className='sm:text-2xl text-xl font-semibold font-mono m-2'>Frest</h3>
          <div className='flex m-auto'>
            <a target={'_blank'} rel='noreferrer' href="http://frest-fronend.vercel.app/"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Live</button></a>
            <a target={'_blank'} rel='noreferrer' href="https://github.com/Omjavir/Frest_frontend"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Code</button></a>
          </div>
        </div>
        <div className='border-gray-300 shadow-md border-2 rounded-sm w-[85vw] sm:w-[25vw] flex flex-col m-4'>
          <img className='w-full rounded border-b-gray-200 border-2' loading='lazy' src={ls7} alt="Image1" />
          <h3 className='sm:text-2xl text-xl font-semibold font-mono m-2'>Pagination</h3>
          <div className='flex m-auto'>
            <a target={'_blank'} rel='noreferrer' href="https://pagination-alpha-one.vercel.app/"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Live</button></a>
            <a target={'_blank'} rel='noreferrer' href="https://github.com/Omjavir/pagination-with-reactjs"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Code</button></a>
          </div>
        </div>
        <div className='border-gray-300 shadow-md border-2 rounded-sm w-[85vw] sm:w-[25vw] flex flex-col m-4'>
          <img className='w-full rounded border-b-gray-200 border-2' loading='lazy' src={ls2} alt="Image1" />
          <h3 className='sm:text-2xl text-xl font-semibold font-mono m-2'>Netflix UI CLone</h3>
          <div className='flex m-auto'>
            <a target={'_blank'} rel='noreferrer' href="https://netflix-clone-delta-eight-87.vercel.app/"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Live</button></a>
            <a target={'_blank'} rel='noreferrer' href="https://github.com/Omjavir/Netflix-clone"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Code</button></a>
          </div>
        </div>
      </div>
      <button onClick={handleClick} className='border-gray-500 rounded-md my-4 shadow-md border-2 p-2 sm:ml-[50%] ml-[35%]'>View more...</button>
    </div>
  )
}

export default Work