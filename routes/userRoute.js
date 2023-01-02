import express from "express";
import { getUsers,getUserById,saveUser,updateUser,deleteUser } from "../controller/userController.js";

const router=express.Router();


router.get('/users',getUsers);
router.get('/user/:id',getUserById);
router.post('/user',saveUser);
router.patch('/user/:id',updateUser);
router.delete('/user/:id',deleteUser);

export default router;