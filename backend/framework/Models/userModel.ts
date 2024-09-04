import { Schema,model } from "mongoose";
import { IUser } from "../../entities/user";

const userSchema = new Schema<IUser>({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  }, {
    timestamps: true 
  });
   const User = model<IUser>('User', userSchema);
   export default User;