import React from 'react'
import { BsCodeSlash } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">

        <h3 class="font-semibold text-white text-xl tracking-tight flex"><BsCodeSlash color='white' size={'30'} /> <p className='px-2'>OM</p></h3>
        <a href="mailto:javirom07042003@gmail.com" class="animate-bounce inline-block py-2 px-6 border-white border-2 text-white rounded-lg shadow-lg shadow-teal-700/70">Hire Me</a>
      </nav>
    </div>
  )
}

export default Navbar