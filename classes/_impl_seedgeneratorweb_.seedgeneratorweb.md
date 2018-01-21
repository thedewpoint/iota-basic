[iota-basic](../README.md) > ["impl/SeedGeneratorWeb"](../modules/_impl_seedgeneratorweb_.md) > [SeedGeneratorWeb](../classes/_impl_seedgeneratorweb_.seedgeneratorweb.md)



# Class: SeedGeneratorWeb


Seed generator using window.crypto library to securely generate a seed logic shamelessly stolen/inspired from [https://stackoverflow.com/a/18121681/2162857](https://stackoverflow.com/a/18121681/2162857)
*__class__*: 


## Implements

* [ISeedGenerator](../interfaces/_api_seedgenerator_.iseedgenerator.md)

## Index

### Methods

* [generateSeed](_impl_seedgeneratorweb_.seedgeneratorweb.md#generateseed)



---

## Methods
<a id="generateseed"></a>

###  generateSeed

► **generateSeed**(): `Promise`.<`string`>



*Implementation of [ISeedGenerator](../interfaces/_api_seedgenerator_.iseedgenerator.md).[generateSeed](../interfaces/_api_seedgenerator_.iseedgenerator.md#generateseed)*

*Defined in [impl/SeedGeneratorWeb.ts:15](https://github.com/thedewpoint/iota-basic/blob/e0d2d53/src/impl/SeedGeneratorWeb.ts#L15)*



returns a valid random seed




**Returns:** `Promise`.<`string`>





___


