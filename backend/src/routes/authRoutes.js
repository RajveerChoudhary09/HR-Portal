import express from "express";
import { userRegister, userLogin } from "../controller/authController.js";


const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);



export default router;
