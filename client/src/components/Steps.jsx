import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
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
          How it works
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Transform your ideas into stunning visuals in three simple steps
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 group-hover:bg-white/80">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <img width={32} src={item.icon} alt="" className="filter brightness-0 invert" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-slate-800">{item.title}</h2>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
            {index < stepsData.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-1/2"></div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps


// const Steps = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-4xl font-bold mb-2">How it works</h1>
//       <p className="text-lg text-gray-600 mb-8">Transform Words Into Stunning Images</p>
//       <div className="space-y-4 w-full max-w-3xl text-sm">
//         <div className="flex items-center gap-4 p-5 px-8 bg-white rounded-lg shadow-md border">
//           <img width={40} src={assets.download_icon} alt="" />
//           <div>
//             <h2 className="text-xl font-medium">Describe Your Vision</h2>
//             <p className="text-gray-500">"Type a phrase, sentence, or paragraph that describes the image you want to create."</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-4 p-5 px-8 bg-white rounded-lg shadow-md border">
//           <img width={40} src={assets.download_icon} alt="" />
//           <div>
//             <h2 className="text-xl font-medium">Watch the Magic</h2>
//             <p className="text-gray-500">"Our AI-powered engine will transform your text into a high-quality, unique image in seconds."</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-4 p-5 px-8 bg-white rounded-lg shadow-md border">
//           <img width={40} src={assets.download_icon} alt="" />
//           <div>
//             <h2 className="text-xl font-medium">Download & Share</h2>
//             <p className="text-gray-500">"Instantly download your creation or share it with the world directly from our platform."</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }