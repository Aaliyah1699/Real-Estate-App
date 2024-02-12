import Listing from '../models/ListingModel.js';
import { errorHandler } from '../utils/error.js';

export const createListing = async (req, res, next) => {
    try {
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing);
    } catch (error) {
        next(error);
    }
};

export const deleteListing = async (req, res, next) => {
    res.send('create');
};

export const updateListing = async (req, res, next) => {};

export const getListing = async (req, res, next) => {};

export const getAllListings = async (req, res, next) => {};
