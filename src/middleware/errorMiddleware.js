
const multer = require("multer");

const errorMiddleware = (err , req , res,next) => {

    if(err instanceof multer.MulterError){

        if(err.code == "LIMIT_FILE_SIZE"){
            return res.status(413).json({
                message : "Size limit is 5MB",
                success: false
            })
        }

        return res.status(400).json({
            message : err.message,
            success:false,
        })
    }

    if(err){

        return res.status(400).json({

            message: err.message,
            success:false,
        })
    }

    next();
}


module.exports = errorMiddleware

