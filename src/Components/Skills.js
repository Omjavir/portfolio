import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Skills = () => {
    return (
        <div className='mt-16 m-auto'>
            <div className='sm:px-24 px-10 sm:mt-28'>
                <h3 className='font-bold underline flex text-2xl font-mono'>My Skills <HiArrowNarrowRight className='mx-3' size={40} /></h3>
            </div>
            <div className='w-[100%] flex justify-center sm:mt-10 mt-5'>
                <div className='flex flex-wrap sm:w-[80%] w-[90%] justify-center'>
                    <img className='w-[12vh] sm:m-7 m-5 sm:w-[20vh]' src="https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png" alt="" />
                    <img className='w-[12vh] sm:m-7 m-5 sm:w-[20vh]' src="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png" alt="" />
                    <img className='w-[12vh] sm:m-7 m-5 sm:w-[20vh]' src="https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png" alt="" />
                    <img className='w-[12vh] sm:m-7 m-5 sm:w-[20vh]' src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" alt="" />
                    <img className='w-[12vh] sm:m-7 m-5 sm:w-[20vh]' src="https://seeklogo.com/images/G/git-logo-A1D01DDA30-seeklogo.com.png" alt="" />
                    <img className='w-[12vh] sm:m-7 m-5 sm:w-[20vh]' src="https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png" alt="" />
                    <img className='w-[12vh] sm:m-7 m-5 sm:w-[20vh]' src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Skills