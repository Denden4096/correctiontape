// Math.random() is almost no different.
export const prng = (): number => crypto.getRandomValues(new Uint8Array(1))[0]! / 0xff
