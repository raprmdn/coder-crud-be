import express from "express";
import {
    getUsers, findUserById, createUser,
    updateUser, deleteUser
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', findUserById);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;