import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Customer } from "../entity/Customer";
import { UserCredentials } from "../entity/UserCredentials";
import * as bcrypt from 'bcrypt'; 
// import { decrypt, encrypt } from "../utils/encryptDecrypt";
class CredentialController {
     static addAuth = async (data:authEntity) => {
         const currentData ={...data,hexId:"12"};
        //  const hashedcode = encrypt(data.authCode);
        //  currentData.hexId=hashedcode.iv;
        //  if(!currentData.hexId){
        //      return;
        //  }
        //  currentData.authCode=hashedcode.encryptedData;
        //  console.log(decrypt({
        //      iv:currentData.hexId,
        //      encryptedData:currentData.authCode,
        //  }));
         const cred = getRepository(UserCredentials).create(currentData);
         const result =await getRepository(UserCredentials).save(cred);
     }

     static getParticularAuth = async(data) => {
        const selected = await getRepository(UserCredentials)
        .createQueryBuilder("cred").
        where("cred.uid = :uid AND cred.credId = :credId", { uid: data.uid ,credId:data.credId}).getOne();
        // console.log(decrypt({
        //     iv:selected.hexId,
        //     encryptedData:selected.authCode,
        // }));
        return selected;
     }
}

export default CredentialController;