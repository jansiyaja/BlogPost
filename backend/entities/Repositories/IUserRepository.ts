
import { IUser } from "../user"

 export interface IUserRepository{
    create(user: IUser): Promise<IUser>;
    findById(id:string):Promise<IUser|null>;
    findByEmail(email:string):Promise<IUser|null>;
    update(user:IUser):Promise<IUser>;
    delete(id:string):Promise<void>

}