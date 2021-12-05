import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Customer } from "../entity/Customer";
class UserController {
     static createUser = async (client:registerUserEntity) => {
         const post = getRepository(Customer).create(client);
         const result =await getRepository(Customer).save(post);
         return result;
     }
}

export default UserController;