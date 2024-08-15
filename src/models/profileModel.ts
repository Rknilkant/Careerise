import mongoose, { Schema, Document } from "mongoose";
import { User } from "./User";

interface comments {
	user: User; // User interface from 'models/User'
	comment: string;
	date: Date;
}
export interface Profile extends Document {
	userName: string;
	email: string;
	profilePhoto: string;
	bio: string;
	workplace: string;
	techStacks: string[];
	rating: number;
	testimonials: comments[];
	numOfStudentsMentored: number;
	workplaceVerified: boolean;
	memberSince: Date;
}

const ProfileSchema: Schema = new Schema({
	userName: { type: String, require: true, unique: true },
	profilePhoto: { type: String },
	bio: { type: String, require: true },
	workplace: { type: String },
	techStacks: { type: [String] },
	rating: { type: Number },
	testimonials: { type: [Comment] },
	numOfStudentsMentored: { type: Number },
	workplaceVerified: { type: Boolean },
	memberSince: { type: Date, default: Date.now() },
});

const ProfileModel = mongoose.model<Profile>("Profile", ProfileSchema);
export default ProfileModel;
