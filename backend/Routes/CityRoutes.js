import express from 'express';
import {
    createCity,
    getCities,
    getCityById,
    updateCity,
    deleteCity
} from '../Controller/CityController.js';

const router = express.Router();

router.post('/', createCity);          // Create a new city
router.get('/', getCities);            // Get all cities
router.get('/:id', getCityById);      // Get a city by ID
router.put('/:id', updateCity);        // Update a city
router.delete('/:id', deleteCity);     // Delete a city

export default router;
