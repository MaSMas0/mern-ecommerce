import { Router } from "express";
import { authUser,getUserProfile,registerUser,updateUserProfile } from "../controllers/userController.js";
import { auth } from "../middleware/authMiddleware.js";
const router = Router()

router.post('/login',authUser)
router.route('/profile').get(auth,getUserProfile).put(auth,updateUserProfile)
router.route('/').post(registerUser)


export default router;