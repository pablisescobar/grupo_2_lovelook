const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination : (req, res, cb) => {
        cb(null, path.join(__dirname, '../../public/CV'))
    },
    filename : (req, file, cb) => {
        cb(null, `${Date.now()}_img_${path.basename(file.originalname)}_${path.extname(file.originalname)}`)
    }
})
const fileFilter = function(req, file,callback) {
    if(!file.originalname.match(/\.(pdf)$/)){
        req.fileValidationError = "Archivo permitido (.pdf)";
        return callback(null,false,req.fileValidationError);
    }
    callback(null,true);
}
const uploadFile = multer({storage,fileFilter});

module.exports = uploadFile