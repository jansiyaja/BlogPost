import { RegisterUserUseCases } from "../../useCases/userUseCases";
import { Request,Response } from "express";


export class UserController{
    constructor(private registerUserUseCase:RegisterUserUseCases){}

    async register(req: Request, res: Response): Promise<Response> {
        try {
            const { username, email, password } = req.body;
    
            // Basic validation
            if (!username || !email || !password) {
                return res.status(400).json({ error: "All fields are required: username, email, and password" });
            }
    
            const newUser = await this.registerUserUseCase.execute({ email, password, username });
            return res.status(200).json(newUser); 
            
        } catch (error: any) {
            console.error('Error during user registration:', error); 
            return res.status(400).json({ error: error.message || "An unexpected error occurred" });
        }
    }
    
}