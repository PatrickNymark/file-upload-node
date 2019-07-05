const multer = require('multer');
const path = require('path');
const Datauri = require('datauri');


const storage = multer.memoryStorage();

const imageFilter = (req, file, cb) => {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
      // multer auto pass error to express which is catched in error-handler
      return cb({ name: 'WrongImageFormat', message: 'Please use correct image type' }, false);
  }

  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFilter });

const dUri = new Datauri();

/**
 * @description This function converts the buffer to data url
 * @param {Object} file object containing file info and buffer
 * @returns {String} The data url from the string buffer
 */
const dataUri = file => dUri.format(path.extname(file.originalname).toString(), file.buffer);

module.exports = { upload, dataUri };