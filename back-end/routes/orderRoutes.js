import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  getOrders,
  getMyOrders,
  updateOrderToPaid,
  updateOrderToDelivered,
} from "../controllers/orderController.js";
import { admin, auth } from "../middleware/authMiddleware.js";

router.route("/").post(auth, addOrderItems).get(auth, admin, getOrders);
router.get("/myorders",auth,getMyOrders)
router.get("/:id",auth,getOrderById)
router.put("/:id/pay",auth,updateOrderToPaid)
router.put("/:id/deliver",auth,admin,updateOrderToDelivered)

export default router;
