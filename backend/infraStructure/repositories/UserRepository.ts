import { IUserRepository } from "../../entities/Repositories/IUserRepository";
import { IUser } from "../../entities/user";
import User from "../../framework/Models/userModel";

 export class UserRepository implements IUserRepository{

 async create(user: IUser): Promise<IUser> {
    const result= await User.create(user);
    return result.toObject()

}

async findById(id: string): Promise<IUser | null> {
    return await User.findById(id).lean().exec();
}

async findByEmail(email: string): Promise<IUser | null> {
    return await User.findOne({email}).lean().exec()
}
async update(user: IUser): Promise<IUser> {
    try {
      const updatedUser = await User.findByIdAndUpdate(user.id, user, { new: true }).lean().exec();
  
      if (!updatedUser) {
        throw new Error('User not found');
      }
  
      return updatedUser;
    } catch (error) {
     
      throw new Error(`Failed to update user: ${error}`);
    }
  }
  
async delete(id: string): Promise<void> {
    await User.findByIdAndDelete(id).exec();
  }

 }