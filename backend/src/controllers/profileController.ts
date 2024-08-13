import { Request, Response } from 'express';
import Profile from '../models/profileModel';

// Controller function to create a new profile
export const createProfile = async (req: Request, res: Response) => {
  try {
    // Extract data from the request body
    const { name, bio, workplace, techStacks } = req.body;

    // Create a new profile using the Profile model
    const newProfile = new Profile({ name, bio, workplace, techStacks });

    // Save the new profile to the database
    await newProfile.save();

    // Send a success response with the created profile
    res.status(201).json(newProfile);
  } catch (error) {
    // Send an error response if profile creation fails
    res.status(500).json({ error: 'Failed to create profile' });
  }
};

// Controller function to update an existing profile
export const updateProfile = async (req: Request, res: Response) => {
  try {
    // Extract the profile ID from the request parameters
    const { id } = req.params;

    // Find the profile by ID and update it with the new data from the request body
    const updatedProfile = await Profile.findByIdAndUpdate(id, req.body, { new: true });

    // If the profile doesn't exist, send a 404 response
    if (!updatedProfile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    // Send a success response with the updated profile
    res.status(200).json(updatedProfile);
  } catch (error) {
    // Send an error response if the profile update fails
    res.status(500).json({ error: 'Failed to update profile' });
  }
};

// Controller function to delete a profile by ID
export const deleteProfile = async (req: Request, res: Response) => {
  try {
    // Extract the profile ID from the request parameters
    const { id } = req.params;

    // Find the profile by ID and delete it
    const deletedProfile = await Profile.findByIdAndDelete(id);

    // If the profile doesn't exist, send a 404 response
    if (!deletedProfile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    // Send a success response confirming deletion
    res.status(200).json({ message: 'Profile deleted successfully' });
  } catch (error) {
    // Send an error response if the profile deletion fails
    res.status(500).json({ error: 'Failed to delete profile' });
  }
};
