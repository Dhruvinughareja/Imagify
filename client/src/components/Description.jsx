import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center my-32 px-4"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}   
        >
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                    Create AI Images
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    Transform your imagination into stunning visuals
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl">
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="relative group">
                        <img 
                            src={assets.sample_img_1} 
                            className="w-full max-w-lg rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500" 
                            alt="AI Generated Image" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </motion.div>

                <motion.div
                    className="flex-1 space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
                        Introducing the AI-Powered Text to Image Generator
                    </h2>
                    <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                        <p>
                            Easily bring your ideas to life with our advanced AI image generator. Whether you need stunning visuals for your projects or unique imagery that captures your vision, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.
                        </p>
                        <p>
                            Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don't yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!
                        </p>
                    </div>
                    <div className="flex items-center gap-4 pt-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <span className="text-white font-bold text-xl">✨</span>
                        </div>
                        <div>
                            <p className="font-semibold text-slate-800">Instant Generation</p>
                            <p className="text-slate-600">Get your images in seconds</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Description