const router = require('express').Router();
const controller = require('./categoryController');

// router.get('/blogs', controller.getBlogs);

// router.get('/blog/:id', controller.getBlog);
// router.delete("/blog/:id", controller.deleteBlog);
// router.patch("/blog/:id", controller.updateBlog);

// router.post('/blog', controller.createBlog);

// router.post("/comment", controller.createComment);
// router.get("/comment/:id", controller.getComment);
router.post("/add-category", controller.createCategory);
router.get('/categories', controller.getCategories);

module.exports = router;