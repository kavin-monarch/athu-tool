export declare class ModifiedHolder {
    __pattern: any;
    private __modifiedKeys;
    getModifiedKey: (data: string) => accountData | undefined;
    pushModifiedKeys: (toSetData: accountData) => void;
    getPattern(type: string): any;
    getModifiedKeys: () => accountData[];
}
export declare const rawKeysList: Array<Key>;
