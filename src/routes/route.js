/************************* <<--IMPORTING REQUIRED MODULES AND FILES-->> ***********************/
const express = require('express');
const authorController = require('../controllers/authorController');
const blogController = require('../controllers/blogController');
const auth = require('../middlewares/auth');

/*********************** <<--INITIALIZING ROUTER CALL IN THE VARIABLE--> *********************/
const router = express.Router();

/******************** <<--DESTRUCTURING HANDLERS FROM CONTROLLER FILE-->>**********************/
let {createAuthor, authorLogin} = authorController;
let {createBlog, getBlogs, updateBlog, deleteBlogById, deleteBlogByQuery} = blogController;
let {authentication, authorization} = auth;

/************************************* <<--PHASE-I APIS-->> ***********************************/
router.post('/authors', createAuthor);
// router.post('/blogs', createBlog);
// router.get('/blogs', getBlogs);
// router.put('/blogs/:blogId', updateBlog);
// router.delete('/blogs/:blogId', deleteBlogbyId);
// router.delete('/blogs', deleteBlogByQuery);

/**************************** <<--PHASE-II APIS AND MIDDLEWARES-->> ***************************/
// router.post('/login', authentication, authorization, authorLogin);

/**************************** <<--EXPORTING APIS USING ROUTER-->> *****************************/
module.exports = router;