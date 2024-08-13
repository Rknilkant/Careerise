import mongoose, { Schema, Document } from 'mongoose';

// Define the interface representing a document in MongoDB for Profile
export interface IProfile extends Document {
  name: string;              // The name of the mentor
  bio: string;               // A short biography of the mentor
  workplace: string;         // The current workplace of the mentor
  techStacks: string[];      // An array of technologies the mentor is proficient in
}

// Create a Schema corresponding to the document interface.
const ProfileSchema: Schema = new Schema({
  name: { type: String, required: true },             // Name field, required
  bio: { type: String, required: true },              // Bio field, required
  workplace: { type: String, required: true },        // Workplace field, required
  techStacks: { type: [String], required: true },     // Tech stacks field, required, stores an array of strings
});

// Create and export the Profile model from the Schema defined above
const Profile = mongoose.model<IProfile>('Profile', ProfileSchema);
export default Profile;
