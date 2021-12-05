import { Request, Response, Router } from "express";
import AuthController from "../controller/AuthController";
import CredentialController from "../controller/CredentialController";
import UserController from "../controller/userCOntroller";
import { genetateFinal } from "../Generator/Generator_Buffer";
// import { decrypt } from "../utils/encryptDecrypt";
import tokenManager from "../utils/tokenManager";

const router = Router();

router.post("/",(req: Request,res: Response)=>{
    const { access_token } = req.body;
    if(!access_token){
        return res.status(404).json({
            body:"Body Empty"
        })
    } else {
        return res.status(200).json({
            body:"Success"
        })
    }
});

router.post("/register",(req: Request,res: Response)=>{
    console.log(req.body);
    const client:registerUserEntity = {
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    }
    if(!client.username || !client.email || !client.password){
        return res.status(404).json({
            message:"invalid data try again"
        })
    }
    UserController.createUser(client).then((result)=>{
        let accessToken = tokenManager.createToken<registerUserEntity>(client,"60s");
        let renewalToken = tokenManager.createRenewalToken<registerUserEntity>(client,"7d");
        console.log(renewalToken);
        AuthController.createUserAuth({
            uid:result.uid,
            token:accessToken,
            renewal_token:renewalToken
        });
        return res.status(201).json({
            accessToken,
            renewalToken,
        })

    }).catch((err)=>{
        return res.status(404).json({
            message:"Internal Error Please Try again"
        })
    });
});

function auth(req:Request,res:Response,next){
    try {
        let token = req.headers['authorization'];
        const username = req.body.username;
        token = token.split(" ")[1];
    
        if(!token){
            return res.status(404).json({
                message:"Authentication Failed"
            })
        }
        const resultData = tokenManager.verfiyToken({
            username,
            token,
        } as requestTokenEntity,"access");
    
    
        resultData.then((tokenVerify)=>{
            if(tokenVerify.data){
                res.set("token",tokenVerify.data.uid);
                console.log(res.get("token"));
                next();
    
            }
        }).catch((err)=>{
            return res.status(404).json({
                message:err.message
            })
        })
    } catch (error) {
        return res.status(404).json({
            message:"Internal Error"
        })
    }
}

router.post("/getData",auth,(req: Request,res: Response)=>{
    // console.log(res.get("token"));
    const uid = res.get("token");
    CredentialController.getParticularAuth({
        uid,
        credId:req.body.credId
    }).then((finalData)=>{
        if(finalData){
            const unixTime=Math.floor(Date.now() / 1000);
            return res.status(201).json({
                TOTP:genetateFinal(finalData.authCode),
                remainingSeconds:(30-(unixTime % 30))
            })
        }
    });
});


router.post("/addAuth",auth,(req:Request,res:Response)=>{
    try {
        const dbdata :authEntity = {
            uid : res.get("token"),
            authName : req.body.authName,
            authCode : req.body.authCode,
    
        }
        if(!dbdata.authName || !dbdata.authCode){
            throw "Invalid Some request data is missing";
        }
        CredentialController.addAuth(dbdata).then(()=>{
            return res.status(201).json("success");
        });
    } catch (error) {
        return res.status(404).json({
            message:error
        })
    }
})


export default router;