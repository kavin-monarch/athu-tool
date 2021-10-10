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
            return;
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

export const rawKeysList : Array<Key> = [
    {
        userName:"ultron",
        token:"qn5v nhbg pmrr bytj c3sm omsf purf ddjj",
        account:"test@ultron.io",
    },
]
