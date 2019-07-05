const imageService = require('./image.service');

// models
const Post = require('../models/Post');

module.exports = {
  createPost
}

/**
 * Upload single image.
 * @param {string} title a string that represents a post's title.
 * @param {object} file a object that represents a post's image
 * @returns A Promise or exception.
 */
async function createPost(title, file) {
  const post = new Post({ title });

  if(file) {
    // upload image to cloudinary
    const imageUrl = await imageService.uploadSingle(file);

    // create image and save to database
    await imageService.createImage(imageUrl);

     // set image url
     post.image = imageUrl.url;
  }

  return post.save(); 
}
