import express from "express"
import { loginUser, regitserUser } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post("/register", regitserUser)
userRouter.post("/login", loginUser)

export default userRouter;