import React from 'react'
import mp2 from '../Assets/mp2.png'
import mp3 from '../Assets/mp3.png'
import mp4 from '../Assets/mp4.png'
import mp5 from '../Assets/mp5.png'
import ls1 from '../Assets/ls1.png'
import ls2 from '../Assets/ls2.png'
import ls3 from '../Assets/ls3.png'
import ls4 from '../Assets/ls4.png'
import ls5 from '../Assets/ls5.png'
import ls6 from '../Assets/ls6.png'
import ls7 from '../Assets/ls7.png'

const Projects = () => {
  return (
    <div className='100vw text-center'>

      {/* Large Scale Projects  */}
      <div className='ssproj border-b-gray-200 border-2'>
        <h2 className='underline text-2xl sm:text-4xl my-4 font-extrabold'>SMALL-SCALE PROJECTS</h2>
        <div className='w-[90vw] items-center m-auto flex flex-wrap justify-center'>
          {/* <div className='border-gray-300 shadow-md border-2 rounded-sm w-[85vw] sm:w-[25vw] flex flex-col m-2'>
            <img loading='lazy' className='w-full rounded-sm border-b-gray-200 border-2' src="https://github.com/Omjavir/portfolio/blob/master/public/mp1.png?raw=true" alt="Image1" />
            <h3 className='sm:text-2xl text-xl font-semibold font-mono m-2'>To-Do List</h3>
            <div className='flex m-auto'>
              <a target={'_blank'} href="https://omjavir.github.io/To-Do-s-List/"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Live</button></a>
              <a target={'_blank'} href="https://github.com/Omjavir/To-Do-s-List"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Code</button></a>
            </div>
          </div> */}
          <div className='border-gray-300 shadow-md border-2 rounded-sm w-[85vw] sm:w-[25vw] flex flex-col m-2'>
            <img loading='lazy' className='w-full rounded-sm border-b-gray-200 border-2' src={mp2} alt="Image1" />
            <h3 className='sm:text-2xl text-xl font-semibold font-mono m-2'>Responsive Navbar</h3>
            <div className='flex m-auto'>
              <a target={'_blank'} href="https://omjavir.github.io/Responsive-Navbar/"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Live</button></a>
              <a target={'_blank'} href="https://github.com/Omjavir/Responsive-Navbar"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Code</button></a>
            </div>
          </div>
          <div className='border-gray-300 shadow-md border-2 rounded-sm w-[85vw] sm:w-[25vw] flex flex-col m-2'>
            <img loading='lazy' className='w-full rounded-sm border-b-gray-200 border-2' src={mp3} alt="Image1" />
            <h3 className='sm:text-2xl text-xl font-semibold font-mono m-2'>Image Slider</h3>
            <div className='flex m-auto'>
              <a target={'_blank'} href="https://omjavir.github.io/Image-Slider/"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Live</button></a>
              <a target={'_blank'} href="https://github.com/Omjavir/Image-Slider"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Code</button></a>
            </div>
          </div>
          <div className='border-gray-300 shadow-md border-2 rounded-sm w-[85vw] sm:w-[25vw] flex flex-col m-2'>
            <img loading='lazy' className='w-full rounded-sm border-b-gray-200 border-2' src={mp4} alt="Image1" />
            <h3 className='sm:text-2xl text-xl font-semibold font-mono m-2'>Real-Time Clock</h3>
            <div className='flex m-auto'>
              <a target={'_blank'} href="http://clock-omjavir.vercel.app/"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Live</button></a>
              <a target={'_blank'} href="https://github.com/Omjavir/clock"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Code</button></a>
            </div>
          </div>
          <div className='border-gray-300 shadow-md border-2 rounded-sm w-[85vw] sm:w-[25vw] flex flex-col m-2'>
            <img loading='lazy' className='w-full rounded-sm border-b-gray-200 border-2' src={mp5} alt="Image1" />
            <h3 className='sm:text-2xl text-xl font-semibold font-mono m-2'>Toggle Dark Mode</h3>
            <div className='flex m-auto'>
              <a target={'_blank'} href="http://dark-mode-toggle-swart.vercel.app/"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Live</button></a>
              <a target={'_blank'} href="https://github.com/Omjavir/dark-mode-toggle"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Code</button></a>
            </div>
          </div>
        </div>
      </div>

      {/* Large Scale Projects  */}
      <div className='lsproj border-b-gray-200 border-2'>
        <h2 className='underline text-2xl sm:text-4xl my-4 font-extrabold'>LARGE-SCALE PROJECTS</h2>
        <div className='w-[90vw] items-center m-auto flex flex-wrap justify-center'>
          <div className='border-gray-300 shadow-md border-2 rounded-sm w-[85vw] sm:w-[25vw] flex flex-col m-2'>
            <img loading='lazy' className='w-full rounded-sm border-b-gray-200 border-2' src={ls1} alt="Image1" />
            <h3 className='sm:text-2xl text-xl font-semibold font-mono m-2'>Security Website</h3>
            <div className='flex m-auto'>
              <a target={'_blank'} href="https://security-website.vercel.app/"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Live</button></a>
              <a target={'_blank'} href="https://github.com/Omjavir/security_website"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Code</button></a>
            </div>
          </div>
          <div className='border-gray-300 shadow-md border-2 rounded-sm w-[85vw] sm:w-[25vw] flex flex-col m-2'>
            <img loading='lazy' className='w-full rounded-sm border-b-gray-200 border-2' src={ls7} alt="Image1" />
            <h3 className='sm:text-2xl text-xl font-semibold font-mono m-2'>Pagination</h3>
            <div className='flex m-auto'>
              <a target={'_blank'} href="https://pagination-alpha-one.vercel.app/"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Live</button></a>
              <a target={'_blank'} href="https://github.com/Omjavir/pagination-with-reactjs"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Code</button></a>
            </div>
          </div>
          <div className='border-gray-300 shadow-md border-2 rounded-sm w-[85vw] sm:w-[25vw] flex flex-col m-2'>
            <img loading='lazy' className='w-full rounded-sm border-b-gray-200 border-2' src={ls2} alt="Image1" />
            <h3 className='sm:text-2xl text-xl font-semibold font-mono m-2'>Netflix UI CLone</h3>
            <div className='flex m-auto'>
              <a target={'_blank'} href="https://netflix-clone-delta-eight-87.vercel.app/"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Live</button></a>
              <a target={'_blank'} href="https://github.com/Omjavir/Netflix-clone"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Code</button></a>
            </div>
          </div>
          <div className='border-gray-300 shadow-md border-2 rounded-sm w-[85vw] sm:w-[25vw] flex flex-col m-2'>
            <img loading='lazy' className='w-full rounded-sm border-b-gray-200 border-2' src={ls3} alt="Image1" />
            <h3 className='sm:text-2xl text-xl font-semibold font-mono m-2'>Frest</h3>
            <div className='flex m-auto'>
              <a target={'_blank'} href="http://frest-fronend.vercel.app/"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Live</button></a>
              <a target={'_blank'} href="https://github.com/Omjavir/Frest_frontend"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Code</button></a>
            </div>
          </div>
          <div className='border-gray-300 shadow-md border-2 rounded-sm w-[85vw] sm:w-[25vw] flex flex-col m-2'>
            <img loading='lazy' className='w-full rounded-sm border-b-gray-200 border-2' src={ls4} alt="Image1" />
            <h3 className='sm:text-2xl text-xl font-semibold font-mono m-2'>Finance Website</h3>
            <div className='flex m-auto'>
              <a target={'_blank'} href="http://finance-website-lemon.vercel.app/"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Live</button></a>
              <a target={'_blank'} href="https://github.com/Omjavir/finance_website"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Code</button></a>
            </div>
          </div>
          <div className='border-gray-300 shadow-md border-2 rounded-sm w-[85vw] sm:w-[25vw] flex flex-col m-2'>
            <img loading='lazy' className='w-full rounded-sm border-b-gray-200 border-2' src={ls5} alt="Image1" />
            <h3 className='sm:text-2xl text-xl font-semibold font-mono m-2'>Ai Image Generator</h3>
            <div className='flex m-auto'>
              <a target={'_blank'} href="http://a-i-image-generator.vercel.app/"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Live</button></a>
              <a target={'_blank'} href="https://github.com/Omjavir/A.I-Image-Generator"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Code</button></a>
            </div>
          </div>
          <div className='border-gray-300 shadow-md border-2 rounded-sm w-[85vw] sm:w-[25vw] flex flex-col m-2'>
            <img loading='lazy' className='w-full rounded-sm border-b-gray-200 border-2' src={ls6} alt="Image1" />
            <h3 className='sm:text-2xl text-xl font-semibold font-mono m-2'>Messenger</h3>
            <div className='flex m-auto'>
              <a target={'_blank'} href="https://github.com/Omjavir/chatapp-frontend"><button className='m-2 bg-transparent border-gray-300 shadow-md border-2 px-5 font-mono sm:text-2xl rounded-md underline'>Code</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects