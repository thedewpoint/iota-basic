[iota-basic](../README.md) > ["impl/CurlFactory"](../modules/_impl_curlfactory_.md) > [CurlFactory](../classes/_impl_curlfactory_.curlfactory.md)



# Class: CurlFactory


Factory for returning an implementation of ICurlHash depending on whether the process is running in nodeJS or a browser.
*__class__*: 


## Index

### Methods

* [getCurlHasher](_impl_curlfactory_.curlfactory.md#getcurlhasher)
* [isNode](_impl_curlfactory_.curlfactory.md#isnode)



---
## Methods
<a id="getcurlhasher"></a>

### «Static» getCurlHasher

► **getCurlHasher**(): [ICurlHash](../interfaces/_api_curlhash_.icurlhash.md)



*Defined in [impl/CurlFactory.ts:12](https://github.com/thedewpoint/iota-basic/blob/714f837/src/impl/CurlFactory.ts#L12)*



Static function for returning the instance




**Returns:** [ICurlHash](../interfaces/_api_curlhash_.icurlhash.md)





___

<a id="isnode"></a>

### «Static»«Private» isNode

► **isNode**(): `boolean`



*Defined in [impl/CurlFactory.ts:24](https://github.com/thedewpoint/iota-basic/blob/714f837/src/impl/CurlFactory.ts#L24)*



Private method for determining if the process is Node or Browser.




**Returns:** `boolean`





___


