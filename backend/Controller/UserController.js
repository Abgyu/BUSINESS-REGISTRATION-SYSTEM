import User from '../Model/Users.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



export const createUser = async (req, res) => {
    const { full_name, email, password_hash, role_id } = req.body;

    try {
        const newUser = new User({ full_name, email, password_hash, role_id });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.log("eeeeeeeeerror",error)
        res.status(400).json({ message: error.message });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find().populate('role_id');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id).populate('role_id');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




export const signIn = async (req, res) => {
    const { email, password_hash } = req.body; // password_hash should be the plain text password here

    try {
        const user = await User.findOne({ email });
      
        if (!user) return res.status(404).json({ message: 'User not found' });

    
       
        if (user.password_hash !== password_hash) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

