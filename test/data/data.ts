export const rawKeysList : Array<Key> = [
    {
        refName:"auth",
        token:"2geo 4ayo dyy5 a4tf 7l6a 7xrv jeqr qrfy ",
        account:"test@ultron.io",
    },
]


export class ModifiedHolder {
    __pattern :any = {
        "common":/^[A-Z2-7=]+$/,
    };
    private __modifiedKeys: Array<accountData>= [];
    getModifiedKey = (data:string) =>{
        const result:accountData[]=this.__modifiedKeys.filter((value)=>{
            if(value.associateAccount===data){
                return value;
            }
        })
        return result[0];
    }
    pushModifiedKeys = (toSetData:accountData) =>{
        this.__modifiedKeys.push(toSetData);
    }

    getPattern(type:string){
        return this.__pattern[type];
    }

    getModifiedKeys = () =>{
        return this.__modifiedKeys;
    }
}