import express from "express";
import { signup, login, logout , updateProfile , checkAuth} from "../controllers/auth.controller.js";
import {protectRoute } from "../middleware/auth.middleware.js"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);


// this will check ki kya user authenticate hai ki nhi then this will update the profile which is middleware
router.put("/update-profile",protectRoute, updateProfile);

router.get("/check",protectRoute,checkAuth);

export default router;
