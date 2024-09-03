import { IUserRepository } from "../entities/Repositories/IUserRepository";
import { HashService } from "../infraStructure/services/HashService";
import { IUser } from "../entities/user";
import User from "../framework/Models/userModel";


export class RegisterUserUseCases{
constructor(
    private userRepository: IUserRepository,
    private   hashService: HashService
){}
async execute(userData: Partial<IUser>): Promise<IUser> {
 const existingUser = await this.userRepository.findByEmail(userData.email! )

 if(existingUser){
    throw new Error('User with this email already exists');
 }

 const hashedPassword = await this.hashService.hash(userData.password!);

 const newUser= new User({
    ...userData,
    password:hashedPassword,
 });
 return await this.userRepository.create(newUser)
 }

}