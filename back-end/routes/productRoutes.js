import { Router } from "express";
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

const router = Router();



// @desc   Fetch all products
// @route  GET /api/products
// @access Public Route
router.get("/", asyncHandler(async(req, res) => {
    const products = await Product.find({})
    res.json(products);
  }));

  
// @desc   Fetch single product
// @route  GET /api/products/:id
// @access Public Route
  router.get("/:id", asyncHandler(async(req, res) => {
    const {id} = req.params
    const product = await Product.findById(id)
    if(product){
        res.json(product) 
    }else{
      res.status(404)
      throw new Error ('Product not found')
     }
    
  }));



export default router