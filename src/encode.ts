import {createBufferFromBitLength, BitWriter} from '@hookun/bitbybit';
import {findEfficientChunkSize} from './findEfficientChunkSize';
import {getTotalBitLength} from './getTotalBitLength';
import {getBitLength} from './getBitLength';

export const encode = (
    data: Array<number>,
    requestedChunkSize?: number,
): ArrayBuffer => {
    const bitLengthList = data.map(getBitLength);
    const {chunkSize, bitLength: totalBitLength} = requestedChunkSize ? {
        chunkSize: requestedChunkSize,
        bitLength: getTotalBitLength(data, requestedChunkSize, bitLengthList),
    } : findEfficientChunkSize(data, bitLengthList);
    const dataLength = data.length;
    const base = 2 ** chunkSize;
    const blockSize = chunkSize + 1;
    const writer = new BitWriter(createBufferFromBitLength(totalBitLength + 8));
    writer.write(blockSize, 8);
    for (let dataIndex = 0; dataIndex < dataLength; dataIndex++) {
        const value = data[dataIndex];
        for (let chunkIndex = Math.ceil(bitLengthList[dataIndex] / chunkSize); 0 < chunkIndex--;) {
            writer.write(
                (0 < chunkIndex ? base : 0) + Math.floor(value / (base ** chunkIndex)) % base,
                blockSize,
            );
        }
    }
    return writer.end();
};
