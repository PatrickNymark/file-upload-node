
// models
const Post = require('../models/Post');

module.exports = {
  createPost
}

/**
 * Upload single image.
 * @param {string} title a string that represents a post's title.
 * @param {string} image a string that represents a post's image url.
 * @returns A Promise or exception.
 */
async function createPost(title, image) {
  const post = new Post({ title, image });

  return post.save();
}
