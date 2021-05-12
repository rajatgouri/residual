const router = require('express').Router();
const controller = require('./videoController');

// router.get('/blogs', controller.getBlogs);

// router.get('/blog/:id', controller.getBlog);
// router.delete("/blog/:id", controller.deleteBlog);
// router.patch("/blog/:id", controller.updateBlog);

// router.post('/blog', controller.createBlog);

// router.post("/comment", controller.createComment);
// router.get("/comment/:id", controller.getComment);
router.post("/add-video", controller.createCategory);
router.get('/videos', controller.getCategories);
router.patch("/videos/:id", controller.updateCategory);
router.delete("/videos/:id", controller.deleteCategory);

module.exports = router;