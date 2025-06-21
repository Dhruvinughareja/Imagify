import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateBtn = () => {

    const { user, setShowLogin } = useContext(AppContext)

    const navigate = useNavigate()

    const onClickHandler = () => {
        if (user) {
            navigate('/result')
            scrollTo(0,0)
        } else {
            scrollTo(0,0)
            setShowLogin(true)
        }
    }

    return (
        <motion.div
            className='py-20 text-center px-4'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight'>
                    Ready to see the{' '}
                    <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
                        magic
                    </span>
                    ?
                </h1>
                <p className='text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed'>
                    Start creating stunning AI-generated images in seconds. Your imagination is the only limit.
                </p>

                <motion.button 
                    onClick={onClickHandler} 
                    className='inline-flex items-center gap-3 px-16 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300'
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Start Creating Now <img className='h-6' src={assets.star_group} alt="" />
                </motion.button>

                <div className="mt-8 flex items-center justify-center gap-8 text-slate-500">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Free to use</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Instant results</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm">High quality</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default GenerateBtn