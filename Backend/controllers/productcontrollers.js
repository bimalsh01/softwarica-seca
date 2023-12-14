const Products = require('../model/productModel');
const cloudinary = require('cloudinary');


const createProduct = async (req,res) =>{
    // step 1 : Check incomming data
    console.log(req.body);
    console.log(req.files);

    // step:2 destructuring
    const {productName, 
        productPrice, 
        productDescription, 
        productCategory} = req.body;

    const {productImage} = req.files;

    // step 3 : validate the data
    if(!productName || !productPrice || !productDescription || !productCategory || !productImage){
        return res.json({
            success : false,
            message : "Please fill all the fields."
        })
    }

        // step 4 : try catch block
        try {
            // step 5 : upload image to cloudinary
            const uploadedImage = await cloudinary.v2.uploader.upload(
                productImage.path,
                {
                    folder : "products",
                    crop : "scale"
                }
            )
    
            // save the products
            const newProduct = new Products({
                productName : productName,
                productPrice : productPrice,
                productDescription : productDescription,
                productCategory : productCategory,
                productImageUrl : uploadedImage.secure_url
            })
            await newProduct.save();
            res.status(200).json({
                success : true,
                message : "Product created successfully",
                data : newProduct
            })
    
            
        } catch (error) {
            console.log(error);
            res.status(500).json("Server Error")
        }

}

// function for getting all products
const getAllProducts = async (req,res) => {
    try {
        const listOfProducts = await Products.find();
        res.json({
            success : true,
            message : "Products fetched successfully",
            products : listOfProducts
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json("Server Error")
    }   
}



module.exports = {
    createProduct,
    getAllProducts
}