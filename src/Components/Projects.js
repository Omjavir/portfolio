import React from 'react'

const Projects = () => {
  return (
    <div className='100vw text-center'>
      <div className='miniproject'>
        <p className='underline text-2xl sm:text-4xl'>Mini Projects</p>
        <div className='w-[90vw] items-center m-auto flex flex-wrap justify-center'>
          <div className='border-gray-300 border-2 rounded-sm w-[85vw] sm:w-[25vw] flex flex-col m-2'>
            <img className='w-full rounded-sm' src="https://assets.foxdcg.com/dpp-uploaded/images/wwe-friday-night-smackdown/chip_wwe_friday_night_smack_down_2022_b-keyart.jpg" alt="Image1" />
            <h3 className='sm:text-2xl text-xl font-semibold m-1'>To-Do List</h3>
            <div className='flex m-auto'>
              <button className='m-1 bg-transparent border-gray-300 border-2 px-3 sm:text-2xl rounded-md underline'>Live</button>
              <button className='m-1 bg-transparent border-gray-300 border-2 px-3 sm:text-2xl rounded-md underline'>Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects