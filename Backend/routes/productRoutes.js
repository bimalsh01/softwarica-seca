const router = require('express').Router();
const productController = require("../controllers/productcontrollers")

// Create product API
router.post('/create_product', productController.createProduct)

// Get all products API
router.get("/get_products", productController.getAllProducts)





module.exports = router;