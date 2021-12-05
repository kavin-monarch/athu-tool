import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
class UserController {
     static createUser = async (client:registerUserEntity) => {
         const post = getRepository(User).create(client);
         const result =await getRepository(User).save(post);
         return result;
     }
}

export default UserController;