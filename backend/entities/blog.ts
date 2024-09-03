import { Schema } from "mongoose";

export interface IBlogPost extends Document {
    title: string;
    content: string;
    authorId: Schema.Types.ObjectId;  // Reference to the User
    createdAt: Date;
    updatedAt: Date;
  }