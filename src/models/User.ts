import mongoose from "mongoose";

/*
 * Only use this model (mongodb collection) for auth
 */
export interface User {
	firstName: string;
	lastName: string;
	email: string;
	recoveryHint: string;
}

const userSchema = new mongoose.Schema<User>({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	recoveryHint: { type: String, require: true },
});

const UserModel = mongoose.model<User>("User", userSchema);
export default UserModel;
