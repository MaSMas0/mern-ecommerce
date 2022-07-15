import { Router } from "express";
import { authUser,getUserProfile,registerUser } from "../controllers/userController.js";
import { auth } from "../middleware/authMiddleware.js";
const router = Router()

router.post('/login',authUser)
router.route('/profile').get(auth,getUserProfile)
router.route('/').post(registerUser)


export default router;