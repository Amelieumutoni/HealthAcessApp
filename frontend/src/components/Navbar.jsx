import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between bg-white py-4 px-6 shadow-md border-b'>
      {/* Logo Section (can be added later if you want) */}
      
      <div className="text-4xl font-extrabold text-primary cursor-pointer">
  HEALTH ACCESS
</div>

      {/* Desktop Navbar */}
      <ul className='md:flex items-center justify-center gap-10 font-medium hidden'>
        <NavLink to='/' className="text-lg hover:text-primary transition-all">
          HOME
        </NavLink>
        <NavLink to='/doctors' className="text-lg hover:text-primary transition-all">
          ALL DOCTORS
        </NavLink>
        <NavLink to='/about' className="text-lg hover:text-primary transition-all">
          ABOUT
        </NavLink>
        <NavLink to='/contact' className="text-lg hover:text-primary transition-all">
          CONTACT
        </NavLink>
      </ul>

      {/* Right-side User Section */}
      <div className='flex items-center gap-4'>
        {
          token && userData
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={userData.image} alt="User" />
                <img className='w-2.5' src="/assets/dropdown_icon.svg" alt="Dropdown" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                  <div className='min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4'>
                    <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                    <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                    <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                  </div>
                </div>
              </div>
            : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
        }
        
        {/* Hamburger Menu for Mobile */}
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src="/assets/menu_icon.svg" alt="Menu Icon" />

        {/* Mobile Menu */}
        <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img onClick={() => setShowMenu(false)} src="/assets/cross_icon.svg" className='w-7' alt="Close" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-6 py-3 rounded-full inline-block hover:text-primary transition-all'>HOME</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors' ><p className='px-6 py-3 rounded-full inline-block hover:text-primary transition-all'>ALL DOCTORS</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about' ><p className='px-6 py-3 rounded-full inline-block hover:text-primary transition-all'>ABOUT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact' ><p className='px-6 py-3 rounded-full inline-block hover:text-primary transition-all'>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
