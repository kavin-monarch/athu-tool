import * as crypto from "crypto";
import { decode } from "./authBinaryDecoder";

const generateInitial = (token:string, counter:number) =>{
   const decodedToken: ArrayBuffer = decode(token);
   console.log(decodedToken);
   const buffer:Buffer = Buffer.alloc(8);
   for (let i = 0; i < 8; i++) {
      buffer[8 - (i+1)] = counter & 0xff;
      counter = counter >> 8;
   }
   const algoHash = crypto.createHmac('sha1', Buffer.from(decodedToken));
   algoHash.update(buffer);
   const algoHashResult = algoHash.digest();
   const code = headTruncate(algoHashResult);
   const retunableTOTP = code.toString().match(/(\S{6})$/g);
   /// Generate time based otp with recon-ng method of 10^6 time 
   // to get last 6 digit from the extracted 31 bytes
   return retunableTOTP?retunableTOTP[0]:code % (10 ** 6);
}
// @ts-ignore
const headTruncate = (hmacValue) => {
   const offset = hmacValue[hmacValue.length - 1] & 0xf;

   return (
      ((hmacValue[offset] & 0x7f) << 24) |
      ((hmacValue[offset + 1] & 0xff) << 16) |
      ((hmacValue[offset + 2] & 0xff) << 8) |
      (hmacValue[offset + 3] & 0xff)
   );
}



export const genetateFinal = (token:string) => {
   const counter = Math.floor(Date.now() / 30000);
   return generateInitial(token, counter);
}