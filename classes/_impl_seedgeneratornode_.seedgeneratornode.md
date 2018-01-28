[iota-basic](../README.md) > ["impl/SeedGeneratorNode"](../modules/_impl_seedgeneratornode_.md) > [SeedGeneratorNode](../classes/_impl_seedgeneratornode_.seedgeneratornode.md)



# Class: SeedGeneratorNode


Seed generator using the node crypto library which uses system entropy to generate randomness
*__class__*: 


## Implements

* [ISeedGenerator](../interfaces/_api_seedgenerator_.iseedgenerator.md)

## Index

### Methods

* [generateSeed](_impl_seedgeneratornode_.seedgeneratornode.md#generateseed)
* [whiten](_impl_seedgeneratornode_.seedgeneratornode.md#whiten)



---

## Methods
<a id="generateseed"></a>

###  generateSeed

► **generateSeed**(): `Promise`.<`string`>



*Implementation of [ISeedGenerator](../interfaces/_api_seedgenerator_.iseedgenerator.md).[generateSeed](../interfaces/_api_seedgenerator_.iseedgenerator.md#generateseed)*

*Defined in [impl/SeedGeneratorNode.ts:15](https://github.com/thedewpoint/iota-basic/blob/714f837/src/impl/SeedGeneratorNode.ts#L15)*



returns a valid random seed




**Returns:** `Promise`.<`string`>





___

<a id="whiten"></a>

### «Private» whiten

► **whiten**(hex: *`string`*): `string`



*Defined in [impl/SeedGeneratorNode.ts:22](https://github.com/thedewpoint/iota-basic/blob/714f837/src/impl/SeedGeneratorNode.ts#L22)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| hex | `string`   |  - |





**Returns:** `string`





___


