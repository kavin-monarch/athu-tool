import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Tokens } from "../entity/Tokens";
import { User } from "../entity/User";
class AuthController {
     static createUserAuth = async (data:userTokenEntity) => {
         const tokenRow = getRepository(Tokens).create(data);
         const result =await getRepository(Tokens).save(tokenRow);
         return result;
     }

     static getUser = async (username:string) => {
        const data = await getRepository(User).findOne(username);
        return data;
     }
     static getTokenAvailable = async (data:requestTokenEntity) => {
        // const dataFromUserTable = await getRepository(User).findOne(username);
        // console.log(dataFromUserTable);
        // if(dataFromUserTable){
        //     const tokenRow = await getRepository(Tokens).findOne(dataFromUserTable.uid);
        //     if(tokenRow && tokenRow.token===data.token){
        //         return dataFromUserTable;
        //     }
        //     else{
        //         return null;
        //     }
        // }
        // return null;
     }

     static getToken = async (uid,type) => {
        const tokenRow = await getRepository(Tokens).findOne(uid);
        if(tokenRow){
            switch(type){
                case "token":
                    return tokenRow.token;
            }
        }
     }
}

export default AuthController;