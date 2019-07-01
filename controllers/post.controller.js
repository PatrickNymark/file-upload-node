const express = require('express');
const router = express.Router();
const multer = require('..//helpers/multer');
const uploadService = require('../services/upload.service');
const postService = require('../services/post.service');

router.post('/', multer.upload.single('image'), createPost);
router.get('/test', (req, res) => {
  res.render('index');
});

module.exports = router;

function createPost(req, res, next) {
  if(req.file) {
    return uploadService.uploadSingle(req).then(result => {
      postService.createPost(result.url, req.body.title)
        .then(post => {
          res.json(post)
        }).catch(err => next(err))
    }).catch(err => next(err))
  }

  postService.createPost(req.body.title).then(post => {
      res.json(post)
  }).catch(err => next(err))
}

module.exports = router;