const blogsRouter = require('express').Router();
const Blog = require('../models/blog');

blogsRouter.get("/", (request, response) => {
    Blog
    .find({})
    .then((blogs) => {
      response.json(blogs);
    })
    .catch((error) => {
      logger.error('error11:', error.message)
    });;
  });
  
  blogsRouter.post("/", (request, response) => {
    const blog = new Blog(request.body);
  
    blog
    .save()
    .then((result) => {
      //response.status(201).json(result);
    })
    .catch((error) => {
      //logger.error('error 12:', error.message)
    });;
  });

  module.exports = blogsRouter;