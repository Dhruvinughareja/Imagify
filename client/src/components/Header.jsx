import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { delay, motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const { user, setShowLogin } = useContext(AppContext)

    const navigate = useNavigate()

    const onClickHandler = () => {
        if (user) {
            navigate('/result')
        } else {
            setShowLogin(true)
        }
    }

    return (
        <motion.div
            className='flex flex-col justify-center items-center text-center my-24'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <motion.div
                className='text-slate-600 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full border border-slate-200 shadow-sm'
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <p className="font-medium">✨ Best AI Image Generator</p>
                <img src={assets.star_icon} alt="" className="w-4 h-4" />
            </motion.div>

            <motion.h1
                className='text-center mx-auto mt-12 text-5xl max-w-[350px] sm:text-8xl sm:max-w-[700px] font-bold leading-tight'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 2 }}
            >
                Turn text to{' '}
                <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
                    image
                </span>
                , instantly.
            </motion.h1>

            <motion.p
                className='text-center max-w-2xl mx-auto mt-8 text-lg text-slate-600 leading-relaxed'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                Unleash your creativity with cutting-edge AI. Transform your imagination into stunning visual art in seconds - just describe, and watch the magic unfold.
            </motion.p>

            <motion.button
                className='sm:text-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-auto mt-10 px-16 py-4 flex items-center gap-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
                onClick={onClickHandler}
            >
                Start Creating <img className='h-6' src={assets.star_group} alt="" />
            </motion.button>

            <motion.div
                className='flex flex-wrap justify-center mt-20 gap-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                {Array(6).fill('').map((item, index) => (
                    <motion.div
                        key={index}
                        className="relative group"
                        whileHover={{ scale: 1.05, duration: 0.1 }}
                    >
                        <motion.img
                            className='rounded-xl hover:rounded-2xl transition-all duration-300 cursor-pointer max-sm:w-12 shadow-lg hover:shadow-xl'
                            width={80}
                            src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                ))}
            </motion.div>

            <motion.p
                className='mt-4 text-slate-500 font-medium'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            >
                ✨ Generated with Imagify AI
            </motion.p>
        </motion.div>
    )
}

export default Header


// const Header = () => {
//     return (
//         <div className='text-center'>

//             <div className='text-stone-500 mt-14 inline-flex items-center gap-2 bg-white px-5 py-1 rounded-full border border-neutral-500'>
//                 <p>Best text to image generator</p>
//                 <img src={assets.star_icon} alt="" />
//             </div>


//             <h1 className='text-center mx-auto mt-10 text-4xl max-w-[300px] sm:text-6xl sm:max-w-[490px]'>
//                 Turn text to <span className='text-blue-600'>image</span>, in seconds.
//             </h1>

//             <p className='text-center max-w-xl mx-auto mt-5'>Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen.</p>

//             <button className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2 rounded-full hover:scale-[1.01] transition-all'>
//                 Generate Images
//             </button>

//             <div className='flex flex-wrap justify-center mt-16 gap-3'>
//                 {Array(6).fill('').map((item, index) => (
//                     <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer' width={70} key={index} src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} />
//                 ))}
//             </div>
//             <p className='mt-2 text-neutral-600'>Generated images from imagify</p>
//         </div>
//     )
// }

// export default Header