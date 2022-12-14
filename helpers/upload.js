var multer = require('multer');
const path = require('path');
  
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'doc/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname+ (Math.random()*100) + path.extname(file.originalname))
    }
});
  
var upload = multer({ storage: storage });

module.exports = upload;