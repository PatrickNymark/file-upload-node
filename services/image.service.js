const multer = require('../helpers/multer');
const cloudinary = require('cloudinary');

const Image = require('../models/Image');

module.exports = {
  uploadSingle,
  createImage
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

/**
 * Create image and save to db
 * @param {string} image a string that represents the image url
 * @returns A Promise or exception 
 */
async function createImage(image) {
  const newImage = new Image({ image: image.url });

  return newImage.save();
}