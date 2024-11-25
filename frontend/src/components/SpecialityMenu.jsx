import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='flex flex-col items-center gap-6 py-16 text-[#262626] bg-gray-100'>
            <h1 className='text-4xl font-extrabold tracking-wide text-gray-800'>Find by Speciality</h1>
            <p className='sm:w-1/3 text-center text-lg font-light text-gray-600'>
                Simply browse through our extensive list of trusted doctors and schedule your appointment hassle-free.
            </p>
            <div className='flex sm:justify-center gap-8 pt-8 w-full overflow-scroll'>
                {specialityData.map((item, index) => (
                    <Link
                        to={`/doctors/${item.speciality}`}
                        onClick={() => scrollTo(0, 0)}
                        className='flex flex-col items-center text-base font-semibold px-4 py-2 bg-[#003366] rounded-lg text-white hover:bg-[#00509e] hover:scale-105 transition-transform duration-300 shadow-lg'
                        key={index}
                    >
                        {item.speciality}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu
