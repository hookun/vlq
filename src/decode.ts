import {BitReader} from '@hookun/bitbybit';

export const decode = function* (
    encoded: ArrayBuffer,
): Generator<number> {
    const reader = new BitReader(encoded);
    const blockSize = reader.read(8);
    const chunkSize = blockSize - 1;
    const shift = 2 ** chunkSize;
    while (!reader.done) {
        let continueFlag = true;
        let value = 0;
        while (continueFlag) {
            continueFlag = reader.read(1) === 1;
            value += reader.read(chunkSize);
            if (continueFlag) {
                value *= shift;
            }
        }
        yield value;
        if (reader.residualBitLength < chunkSize) {
            break;
        }
    }
};
