import { Router } from "express";
import { Request,Response } from "express";
import { UserController } from "../infraStructure/Controllers/userController";
import { RegisterUserUseCases } from "../useCases/userUseCases";
import { UserRepository } from "../infraStructure/repositories/UserRepository";
import { BcryptHashService } from "../infraStructure/services/HashService";

//dependencies
const userRepository=new UserRepository();
const hashService=new BcryptHashService
const registerUserUseCase=new RegisterUserUseCases(userRepository,hashService)
const userController=new UserController(registerUserUseCase)
const router=Router();
router.post('/register',(req:Request,res:Response)=>userController.register(req,res));

export default router;