interface userTokenEntity {
    uid:string,
    token?:string,
    renewal_token?:string,
}

interface registerUserEntity {
    username:string,
    email:string,
    password:string,
}

interface requestTokenEntity {
    username:string,
    token?:string,
    renewal_token?:string,
}

interface authEntity {
    uid:string,
    authName:string,
    authCode:string,
    hexId?:string
}