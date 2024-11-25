import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
            {/* Section Title */}
            <h1 className='text-4xl font-extrabold text-[#003366] tracking-wide'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-lg font-light text-gray-600'>
                Simply browse through our extensive list of trusted doctors.
            </p>

            {/* Doctors Grid */}
            <div className='w-full grid grid-cols-auto gap-6 pt-8 px-3 sm:px-0'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div
                        onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
                        className='border border-[#003366] rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300 shadow-md'
                        key={index}
                    >
                        {/* Doctor Image */}
                        <img className='bg-[#EAEFFF]' src={item.image} alt="" />
                        
                        {/* Doctor Info */}
                        <div className='p-4'>
                            <div className={`flex items-center gap-2 text-sm ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                                <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p>
                                <p>{item.available ? 'Available' : "Not Available"}</p>
                            </div>
                            <p className='text-[#003366] text-lg font-semibold'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* More Button */}
            <button
                onClick={() => { navigate('/doctors'); scrollTo(0, 0) }}
                className='mt-10 px-8 py-3 text-lg font-semibold rounded-full shadow-lg bg-gradient-to-r from-[#00509e] to-[#003366] text-white hover:from-[#003366] hover:to-[#001f3d] transition-transform hover:scale-105'
            >
                More
            </button>
        </div>
    )
}

export default TopDoctors
