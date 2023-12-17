const router = require('express').Router();
const productController = require("../controllers/productcontrollers")

// Create product API
router.post('/create_product', productController.createProduct)

// Get all products API
router.get("/get_products", productController.getAllProducts)

// Get single product API | /get_product/:id
router.get("/get_product/:id", productController.getSingleProduct)





module.exports = router;