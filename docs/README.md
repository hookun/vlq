
# @hookun/vlq

## Index

### Functions

* [decode](README.md#const-decode)
* [encode](README.md#const-encode)
* [findEfficientChunkSize](README.md#const-findefficientchunksize)
* [getBitLength](README.md#const-getbitlength)
* [getTotalBitLength](README.md#const-gettotalbitlength)

## Functions

### `Const` decode

▸ **decode**(`encoded`: ArrayBuffer): *Generator‹number›*

*Defined in [decode.ts:3](https://github.com/hookun/vlq/blob/732caed/src/decode.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`encoded` | ArrayBuffer |

**Returns:** *Generator‹number›*

___

### `Const` encode

▸ **encode**(`data`: Array‹number›, `requestedChunkSize?`: undefined | number): *ArrayBuffer*

*Defined in [encode.ts:6](https://github.com/hookun/vlq/blob/732caed/src/encode.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | Array‹number› |
`requestedChunkSize?` | undefined &#124; number |

**Returns:** *ArrayBuffer*

___

### `Const` findEfficientChunkSize

▸ **findEfficientChunkSize**(`data`: Array‹number›, `bitLengthList`: number[]): *object*

*Defined in [findEfficientChunkSize.ts:4](https://github.com/hookun/vlq/blob/732caed/src/findEfficientChunkSize.ts#L4)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | Array‹number› | - |
`bitLengthList` | number[] | data.map(getBitLength) |

**Returns:** *object*

* **bitLength**: *number*

* **chunkSize**: *number*

___

### `Const` getBitLength

▸ **getBitLength**(`value`: number): *number*

*Defined in [getBitLength.ts:1](https://github.com/hookun/vlq/blob/732caed/src/getBitLength.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *number*

___

### `Const` getTotalBitLength

▸ **getTotalBitLength**(`data`: Array‹number›, `chunkSize`: number, `bitLengthList`: number[]): *number*

*Defined in [getTotalBitLength.ts:3](https://github.com/hookun/vlq/blob/732caed/src/getTotalBitLength.ts#L3)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`data` | Array‹number› | - |
`chunkSize` | number | - |
`bitLengthList` | number[] | data.map(getBitLength) |

**Returns:** *number*
