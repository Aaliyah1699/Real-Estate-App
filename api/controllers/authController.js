import { errorHandler } from '../utils/error.js';
import User from '../models/UserModel.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signUp = async (req, res, next) => {
      const { username, email, password } = req.body;
      const hashedPassword = bcryptjs.hashSync(password, 10);
      const newUser = new User({ username, email, password: hashedPassword });
      try {
          await newUser.save();
          res.status(201).json('User created successfully!');
      } catch (error) {
          next(error);
      }
};

export const signIn = async (req, res, next) => {};

export const google = async (req, res, next) => {};

export const signOut = async (req, res, next) => {};
