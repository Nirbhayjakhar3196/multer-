const cloudinary = require("../config/cloudinary");

const uploadToCloudinary = (buffer, folder = "profiles") => {

    return new Promise((resolve, reject) => {

        const stream = cloudinary.uploader.upload_stream(

            {
                folder,
            },

            (error, result) => {

                if (error) {
                    return reject(error);
                }

                resolve(result);

            }

        );

        stream.end(buffer);

    });

};

const deleteFromCloudinary = async (publicId) => {

    if (!publicId) return;

    return await cloudinary.uploader.destroy(publicId);

};

module.exports = {
    uploadToCloudinary,
    deleteFromCloudinary,
};