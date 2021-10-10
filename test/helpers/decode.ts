class Decoder {
    constructor(){
    }
    caller = (authTokenString:string)=>{
        let v1, v2, v3, v4, v5, v6, v7, v8, bytes = [], index = 0, length = authTokenString.length;
    
        // 4 char to 3 bytes
        for (var i = 0, count = length >> 3 << 3; i < count;) {
        v1 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v2 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v3 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v4 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v5 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v6 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v7 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v8 = baseDecodeCharacters[authTokenString.charAt(i++)];
        bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
        bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
        bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
        bytes[index++] = (v5 << 7 | v6 << 2 | v7 >>> 3) & 255;
        bytes[index++] = (v7 << 5 | v8) & 255;
        }
    
        // remain bytes
        var remain = length - count;
        if (remain === 2) {
        v1 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v2 = baseDecodeCharacters[authTokenString.charAt(i++)];
        bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
        } else if (remain === 4) {
        v1 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v2 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v3 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v4 = baseDecodeCharacters[authTokenString.charAt(i++)];
        bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
        bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
        } else if (remain === 5) {
        v1 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v2 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v3 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v4 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v5 = baseDecodeCharacters[authTokenString.charAt(i++)];
        bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
        bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
        bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
        } else if (remain === 7) {
        v1 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v2 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v3 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v4 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v5 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v6 = baseDecodeCharacters[authTokenString.charAt(i++)];
        v7 = baseDecodeCharacters[authTokenString.charAt(i++)];
        bytes[index++] = (v1 << 3 | v2 >>> 2) & 255;
        bytes[index++] = (v2 << 6 | v3 << 1 | v4 >>> 4) & 255;
        bytes[index++] = (v4 << 4 | v5 >>> 1) & 255;
        bytes[index++] = (v5 << 7 | v6 << 2 | v7 >>> 3) & 255;
        }
        return bytes;
    }
}

export const dc = new Decoder();

const baseDecodeCharacters: AlgoDecodeChar = {
'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8,
'J': 9, 'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15, 'Q': 16,
'R': 17, 'S': 18, 'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23, 'Y': 24,
'Z': 25, '2': 26, '3': 27, '4': 28, '5': 29, '6': 30, '7': 31
};