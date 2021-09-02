const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/img/photos'))
    },
    filename : (req, file, cb) => {
        cb(null, `${Date.now()}_img_${path.basename(file.originalname)}_${path.extname(file.originalname)}`)
    }
})

const uploadFile = multer({storage});

module.exports = uploadFile;