import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'
import { SiLeetcode, SiCodewars } from 'react-icons/si'

const Media = () => {
    return (
        <div className='flex justify-center'>
           <a target={'_blank'} href={'https://www.linkedin.com/in/om-javir-316613254/'}><AiFillLinkedin className='sm:m-4 m-2' size={'30'} /></a> 
           <a target={'_blank'} href={'https://github.com/Omjavir'}><AiFillGithub className='sm:m-4 m-2' size={'30'} /></a> 
           <a target={'_blank'} href={'https://leetcode.com/omjavir/'}><SiLeetcode className='sm:m-4 m-2' size={'30'} /></a> 
           <a target={'_blank'} href={'https://www.codewars.com/users/omjavir'}><SiCodewars className='sm:m-4 m-2' size={'30'} /></a> 
           <a target={'_blank'} href={'https://twitter.com/omjavirr'}><AiFillTwitterCircle className='sm:m-4 m-2' size={'30'} /></a>
        </div>
    )
}

export default Media