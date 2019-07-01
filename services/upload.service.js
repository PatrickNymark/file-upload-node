const multer = require('../helpers/multer');
const cloudinary = require('../config/cloudinary-config');

module.exports = {
  uploadSingle
}

/**
 * Upload single image.
 * @param {object} file a object that represents a image file.
 * @returns A Promise or exception.
 */
async function uploadSingle(file) {
  const fileUrl = multer.dataUri(file).content;

  return cloudinary.uploader.upload(fileUrl);
}
