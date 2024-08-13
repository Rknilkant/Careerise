import express, { Request, Response } from 'express';
import { UserController } from '../controllers/userController';

const router = express.Router();

// Route to create a new user
router.post('/users', (req: Request, res: Response) => {
    const newUser = UserController.createUser(req.body);
    res.status(201).json(newUser);
});

// Route to get all users
router.get('/users', (req: Request, res: Response) => {
    const users = UserController.getAllUsers();
    res.json(users);
});

// Route to get a user by ID
router.get('/users/:id', (req: Request, res: Response) => {
    const user = UserController.getUserById(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Route to update a user by ID
router.put('/users/:id', (req: Request, res: Response) => {
    const updatedUser = UserController.updateUser(req.params.id, req.body);
    if (updatedUser) {
        res.json(updatedUser);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Route to delete a user by ID
router.delete('/users/:id', (req: Request, res: Response) => {
    const success = UserController.deleteUser(req.params.id);
    if (success) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

export default router;
