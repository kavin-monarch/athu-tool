import {ModifiedHolder, rawKeysList} from "./data/data";
import {withOutSpacesUpper} from "./helpers/seperator";
import { genetateFinal } from "./helpers/generator";

const userData= new ModifiedHolder();
// key sync helper
rawKeysList.forEach((key: Key,index)=>{
   userData.pushModifiedKeys(withOutSpacesUpper(key));
});

const validator = (token:string) :Promise<string> =>{
   return new Promise((res,rej)=>{
      if(!token.length){
         rej("Your Token Length is Zero");
      } else if(!userData.getPattern("common").test(token)){
        rej("Your Token Is Invalid");
      } else{
         res(token);
      }
   })
}

validator(userData.getModifiedKeys("test@ultron.io").token)
.then((token:string)=>{
   console.log(genetateFinal(token));
})
.catch((err:string)=>{
   console.error(err);
})