import axios from 'axios'
import fs from 'fs'
import FormData from 'form-data'
import userModel from '../models/userModel.js'

// Controller function to generate image from prompt
// http://localhost:4000/api/image/generate-image
export const generateImage = async (req, res) => {

  try {

    const { userId, prompt } = req.body

    // Fetching User Details Using userId
    const user = await userModel.findById(userId)
    
    if (!user || !prompt) {
      return res.json({ success: false, message: 'Missing Details' })
    }

    // Creation of new multi/part formdata
    const formdata = new FormData()
    formdata.append('prompt', prompt)

    // Calling Clipdrop API
    const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formdata, {
      headers: {
        'x-api-key': process.env.CLIPDROP_API,
      },
      responseType: "arraybuffer"
    })

    // Convertion of arrayBuffer to base64
    const base64Image = Buffer.from(data, 'binary').toString('base64');
    const resultImage = `data:image/png;base64,${base64Image}`

    // Sending Response
    res.json({ success: true, message: "Image Generated Successfully", resultImage })

  } catch (error) {
    console.log(error.message)
    res.json({ success: false, message: error.message })
  }
}