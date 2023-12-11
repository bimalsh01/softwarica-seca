const router = require('express').Router();
const productController = require("../controllers/productcontrollers")

// Create product API
router.post('/create_product', productController.createProduct)





module.exports = router;