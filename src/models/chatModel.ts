import mongoose, { Schema, Document } from "mongoose";

export interface Chat extends Document {
    sender: mongoose.Types.ObjectId;   // Reference to User model
    receiver: mongoose.Types.ObjectId; // Reference to User model
    message: string;
    timestamp: Date;
}

const ChatSchema: Schema = new Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

const ChatModel = mongoose.model<Chat>("Chat", ChatSchema);
export default ChatModel;
