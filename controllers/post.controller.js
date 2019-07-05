const express = require('express');
const router = express.Router();
const multer = require('../helpers/multer');
const postService = require('../services/post.service');

router.post('/', multer.upload.single('image'), createPost);
//router.get('/', postService.getAll);

module.exports = router;

function createPost(req, res, next) {
  postService.createPost(req.body.title, req.file)
    .then(post => res.json(post))
    .catch(err => next(err))
}

module.exports = router; 