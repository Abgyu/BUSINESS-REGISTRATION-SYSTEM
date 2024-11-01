import express from 'express';

import {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    signIn
} from '../Controller/UserController.js';


const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

router.post('/signin', signIn);

export default router;
