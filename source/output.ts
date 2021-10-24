import { genetateFinal } from "./others/generator";

const token:string="qn5v nhbg pmrr bytj c3sm omsf purf ddjj";
const final_token=token.replace(/\s/g, "").toUpperCase();
const mainStart = (()=>{
    let counter=0;
    setInterval(() => {
        const unixTime=Math.floor(Date.now() / 1000);
        counter=30-(unixTime % 30);
        const finalOTP=genetateFinal(token);
        console.log(counter,finalOTP);
        return finalOTP;
    }, 1000);
})();