import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 bg-primary text-gray-200'>
      <div className='flex flex-col items-center gap-8 my-10 mt-40 text-sm'>

        <div>
          <p className='text-2xl font-medium mb-5 text-gray-100 text-center'>Contact Us</p>
          <ul className='flex flex-col gap-4 text-gray-300 text-center'>
            <li className='hover:text-gray-100'>
              <span className='font-semibold'>Phone:</span> +250787359868
            </li>
            <li className='hover:text-gray-100'>
              <span className='font-semibold'>Email:</span> amelieu62@gmail.com
            </li>
            <li className='hover:text-gray-100'>
              <span className='font-semibold'>Address:</span> Kigali, Rwanda
            </li>
            <li className='flex justify-center gap-5'>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-100'>
                <i className='fab fa-twitter'></i> Twitter
              </a>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-100'>
                <i className='fab fa-facebook'></i> Facebook
              </a>
              <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-100'>
                <i className='fab fa-linkedin'></i> LinkedIn
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div>
        <hr className='border-primary' />
        <p className='py-5 text-sm text-center text-gray-400'>
          Copyright 2024 @ healthaccess.com - All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
