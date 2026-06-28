const User = require("../models/User");

const {
    uploadToCloudinary,
} = require("../utils/cloudinaryUtils");

const uploadImage = async (req, res, next) => {

    try {

        if (!req.file) {

            return res.status(400).json({
                success: false,
                message: "No file uploaded",
            });

        }

        const result = await uploadToCloudinary(req.file.buffer);

        const user = await User.create({

            name: "New",

            imageUrl: result.secure_url,

            imagePublicId: result.public_id,

        });

        return res.status(201).json({

            success: true,

            message: "Upload successful",

            user,

        });

    }

    catch (error) {

        next(error);

    }

};

module.exports = {
    uploadImage,
};