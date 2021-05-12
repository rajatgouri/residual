const router = require('express').Router();
const controller = require('./tagController');

// router.get('/blogs', controller.getBlogs);

// router.get('/blog/:id', controller.getBlog);
// router.delete("/blog/:id", controller.deleteBlog);
// router.patch("/blog/:id", controller.updateBlog);

// router.post('/blog', controller.createBlog);

// router.post("/comment", controller.createComment);
// router.get("/comment/:id", controller.getComment);
router.post("/add-tag", controller.createCategory);
router.get('/tags', controller.getCategories);
router.patch("/tags/:id", controller.updateCategory);
router.delete("/tags/:id", controller.deleteCategory);

module.exports = router;