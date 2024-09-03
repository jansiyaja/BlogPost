import { RegisterUserUseCases } from "../../useCases/userUseCases";
import { Request,Response } from "express";


export class UserController{
    constructor(private registerUserUseCase:RegisterUserUseCases){}

    async register(req:Request,res:Response):Promise<Response>{
        try {
            const userData=req.body;
            const newUser= await this.registerUserUseCase.execute(userData);
            return res.status(201).json(newUser);
            
        } catch (error ) {
           return res.status(400).json({error}) 
        }
    }
}