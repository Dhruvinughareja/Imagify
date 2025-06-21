import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

    const { setShowLogin, user, logout } = useContext(AppContext)

    return (
        <div className='flex items-center justify-between py-6'>
            <Link to='/' className="hover:scale-105 transition-transform duration-300">
                <img className='w-28 sm:w-32 lg:w-40' src={assets.logo} alt="Imagify Logo" />
            </Link>

            <div>
                {
                    user
                        ? <div className='flex items-center gap-3 sm:gap-4'>
                            <p className='text-slate-600 max-sm:hidden pl-4 font-medium'>Hi, {user.name}</p>
                            <div className='relative group'>
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-0.5">
                                    <img className='w-full h-full rounded-full object-cover drop-shadow' src={assets.profile_icon} alt="Profile" />
                                </div>
                                <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded-lg pt-12'>
                                    <ul className='list-none m-0 p-3 bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl text-sm'>
                                        <li onClick={logout} className='py-2 px-3 cursor-pointer pr-10 hover:bg-slate-100 rounded-lg transition-colors duration-200'>Logout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        : <div className='flex items-center gap-3 sm:gap-5'>
                            <button 
                                onClick={() => setShowLogin(true)} 
                                className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-2.5 sm:px-10 sm:py-3 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
                            >
                                Login
                            </button>
                        </div>
                }
            </div>
        </div>
    )
}

export default Navbar