const cloudinary = require("../config/cloudinary")
const User = require("../models/User")

const uploadImage = async (req, res) => {

    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const result = await new Promise((resolve , reject) => {

            const stream = cloudinary.uploader.upload_stream(

            {
                folder : "profiles",
            },
            (error , result) => {
                if(error) reject(error);
                else resolve(result)
            }
                
            )

            stream.end(req.file.buffer)
        })

        const user = await User.create({
            name : "Nirbhay",
            imageUrl : result.secure_url
        })

        res.json({
            message : "Upload successfully",
            user
        })

    } catch (error) {
        return res.status(400).json({
            message : "Error Failed",
            error : error.message
        })
        
    }
}

module.exports = {uploadImage}