import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-6 py-8 mt-20 border-t border-slate-200'>
        <div className="hover:scale-105 transition-transform duration-300">
            <img width={150} src={assets.logo} alt="Imagify Logo" />
        </div>
        <p className='flex-1 border-l border-slate-300 pl-6 text-sm text-slate-500 max-sm:hidden leading-relaxed'>
            Transforming imagination into reality with cutting-edge AI technology. Create stunning visuals in seconds.
        </p>
        <div className='flex gap-3'>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <img width={20} src={assets.facebook_icon} alt="Facebook" className="filter brightness-0 invert" />
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <img width={20} src={assets.twitter_icon} alt="Twitter" className="filter brightness-0 invert" />
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                <img width={20} src={assets.instagram_icon} alt="Instagram" className="filter brightness-0 invert" />
            </div>
        </div>
    </div>
  )
}

export default Footer