import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  getAllProductsForMobile,
} from '../controllers/productController.js'
import { auth, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(auth, admin, createProduct)
router.get('/mobile',getAllProductsForMobile)
router.route('/:id/reviews').post(auth, createProductReview)
router.get('/top', getTopProducts)
router
  .route('/:id')
  .get(getProductById)
  .delete(auth, admin, deleteProduct)
  .put(auth, admin, updateProduct)

export default router
