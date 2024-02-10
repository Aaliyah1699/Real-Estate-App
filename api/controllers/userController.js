import Listing from '../models/ListingModel.js';
import User from '../models/UserModel.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const test = (req, res) => {
    res.send('Api route is working!');
};

export const updateUser = async (req, res, next) => {};

export const deleteUser = async (req, res, next) => {};

export const getUserListings = async (req, res, next) => {};

export const getUser = async (req, res, next) => {};
