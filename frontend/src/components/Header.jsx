import React from 'react'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 items-center justify-center w-full'>

            {/* --------- Header Left --------- */}
            <div className='md:w-2/3 flex flex-col items-center justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] text-center'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Schedule your Appointment & Keep your Medical Records <br /> With Us
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <p>You can browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment.</p>
                </div>
                <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Book Appointment {/* Removed the arrow icon */}
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/3'>
                {/* Removed the image here */}
            </div>
        </div>
    )
}

export default Header
