const RFC4648 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

function readChar(alphabet: string, char: string): number {
  const idx = alphabet.indexOf(char);

  if (idx === -1) {
    throw new Error('Invalid character found: ' + char);
  }

  return idx;
}

export function decode(input: string): ArrayBuffer {
  let alphabet: string;
  let cleanedInput: string;
  alphabet = RFC4648;
  cleanedInput = input.toUpperCase().replace(/\=+$/, '').replace(/\s/g, "");


  const { length } = cleanedInput;

  let bits = 0;
  let value = 0;

  let index = 0;
  const output = new Uint8Array(((length * 5) / 8) | 0);

  for (let i = 0; i < length; i++) {
    value = (value << 5) | readChar(alphabet, cleanedInput[i]!);
    bits += 5;

    if (bits >= 8) {
      output[index++] = (value >>> (bits - 8)) & 255;
      bits -= 8;
    }
  }

  return output.buffer;
}
