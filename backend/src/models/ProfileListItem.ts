import mongoose from "mongoose";

export interface ProfileListItem {
	photo?: string;
	firstName: string;
	lastName: string;
	description: string;
	rating: number; // out of 5
	noOfstudents: number; // number of students mentored
	topics: string[];
	memberSince: Date;
	profileUrl: string;
	rate: number; // in indian rupee
}

const profileListItemSchema = new mongoose.Schema<ProfileListItem>({
	photo: { type: String },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	description: { type: String, required: true },
	rating: { type: Number, required: true },
	noOfstudents: { type: Number, required: true },
	topics: { type: [String], default: [] },
	memberSince: { type: Date, default: Date.now() },
	profileUrl: { type: String, required: true },
	rate: { type: Number, required: true },
});

const profileListItemModel = mongoose.model<ProfileListItem>(
	"ProfileListItem",
	profileListItemSchema,
);
export default profileListItemModel;
