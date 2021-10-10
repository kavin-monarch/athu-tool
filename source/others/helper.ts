export const withOutSpacesUpper = (key:Key) : accountData => {
    return {
        user:key.userName,
        token:key.token.replace(/\s/g, "").toUpperCase(),
        associateAccount:key.account,
    }
}