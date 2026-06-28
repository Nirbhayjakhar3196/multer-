const multer = require('multer');

const storage = multer.memoryStorage();

const allowedFileTypes = ['image/jpeg', 'image/png', 'image/webp'];

const fileFilter = (req,file,cb) => {

    if(allowedFileTypes.includes(file.mimetype)){
        cb(null,true)
    }
    else{
        cb(new Error("Invalid file type. Only JPEG, PNG and WEBP are allowed."), false)
    }

}

const upload = multer({

    storage,
    limits:{
        fileSize: 1024 * 1024 * 5 // 5MB
    }
})

module.exports = upload;