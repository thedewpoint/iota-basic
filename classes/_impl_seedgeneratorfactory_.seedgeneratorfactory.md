[iota-basic](../README.md) > ["impl/SeedGeneratorFactory"](../modules/_impl_seedgeneratorfactory_.md) > [SeedGeneratorFactory](../classes/_impl_seedgeneratorfactory_.seedgeneratorfactory.md)



# Class: SeedGeneratorFactory


Factory for returning an implementation of ISeedGenerator depending on whether the process is running in nodeJS or a browser.
*__class__*: 


## Index

### Methods

* [getSeedGenerator](_impl_seedgeneratorfactory_.seedgeneratorfactory.md#getseedgenerator)
* [isNode](_impl_seedgeneratorfactory_.seedgeneratorfactory.md#isnode)



---
## Methods
<a id="getseedgenerator"></a>

### «Static» getSeedGenerator

► **getSeedGenerator**(): [ISeedGenerator](../interfaces/_api_seedgenerator_.iseedgenerator.md)



*Defined in [impl/SeedGeneratorFactory.ts:11](https://github.com/thedewpoint/iota-basic/blob/243d8a8/src/impl/SeedGeneratorFactory.ts#L11)*



Static function for returning the instance




**Returns:** [ISeedGenerator](../interfaces/_api_seedgenerator_.iseedgenerator.md)





___

<a id="isnode"></a>

### «Static»«Private» isNode

► **isNode**(): `boolean`



*Defined in [impl/SeedGeneratorFactory.ts:24](https://github.com/thedewpoint/iota-basic/blob/243d8a8/src/impl/SeedGeneratorFactory.ts#L24)*



Private method for determining if the process is Node or Browser.




**Returns:** `boolean`





___


