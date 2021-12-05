import * as JWT from "jsonwebtoken";
import AuthController from "../controller/AuthController";
class TokenEntity {

    createToken = <T>(client:T,expiresIn:string) => {
        return JWT.sign(client,"access",{expiresIn});
    }
    createRenewalToken = <T>(client:T,expiresIn:string) => {
        return JWT.sign(client,"renewal",{expiresIn});
    }

    verfiyToken = (data: requestTokenEntity,type:string) :Promise<any>=> {
        return new Promise((resolve,reject)=>{
            JWT.verify(data.token,type,(err,user)=>{
                // if(!err){
                    AuthController.getUser(data.username).then((userRow)=>{
                        if(userRow){
                            AuthController.getToken(userRow.uid,"token").then((token)=>{
                                if(data.token===token){
                                    resolve({
                                        data:userRow,
                                        message:"token valid",
                                    });
                                } else {
                                    reject({
                                        data:null,
                                        message:"Token Is Invalid"
                                    });
                                }
                            });
                        } else {
                            reject({
                                data:null,
                                message:"User Not Found"
                            });
                        }
                    });
                // } else {
                //     reject({
                //         data:null,
                //         message:"Token Expired"
                //     });
                // }
            });
        });
    }
}


export default new TokenEntity();