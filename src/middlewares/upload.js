const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/public/images')
    },
    filename: function (req, file, cb) {
        cb(null,`${Date.now()}_products_${path.extname(file.originalname)}`)

    }
})
const upload = multer({ 
    storage 
})

module.exports = {
    upload   //variable donde se guarda la info
}