[@hookun/vlq](../globals.md) › ["findEfficientChunkSize"](_findefficientchunksize_.md)

# Module: "findEfficientChunkSize"

## Index

### Functions

* [findEfficientChunkSize](_findefficientchunksize_.md#const-findefficientchunksize)

## Functions

### `Const` findEfficientChunkSize

▸ **findEfficientChunkSize**(`data`: Array‹number›, `bitLengthList`: number[]): *object*

*Defined in [findEfficientChunkSize.ts:4](https://github.com/hookun/vlq/blob/25f864d/src/findEfficientChunkSize.ts#L4)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | Array‹number› | - |
`bitLengthList` | number[] | data.map(getBitLength) |

**Returns:** *object*

* **bitLength**: *number*

* **chunkSize**: *number*
