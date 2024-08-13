import { Router } from 'express';
import { createProfile, updateProfile, deleteProfile } from '../controllers/profileController';

// Create a new router object
const router = Router();

// Define a POST route for creating a new profile
router.post('/profiles', createProfile); 
// Handles POST requests to '/profiles' URL, calls the createProfile controller function

// Define a PUT route for updating an existing profile by ID
router.put('/profiles/:id', updateProfile); 
// Handles PUT requests to '/profiles/:id' URL, calls the updateProfile controller function

// Define a DELETE route for deleting an existing profile by ID
router.delete('/profiles/:id', deleteProfile); 
// Handles DELETE requests to '/profiles/:id' URL, calls the deleteProfile controller function

// Export the router object to be used in other parts of the application
export default router;
