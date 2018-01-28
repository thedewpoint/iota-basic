[iota-basic](../README.md) > ["impl/CurlHash"](../modules/_impl_curlhash_.md) > [CurlHash](../classes/_impl_curlhash_.curlhash.md)



# Class: CurlHash


CurlHash leverages the CCurl binary and ccurl.interface.js to do pow this implementation only works on Node since it is dependent on the provided binaries
*__class__*: 


## Implements

* [ICurlHash](../interfaces/_api_curlhash_.icurlhash.md)

## Index

### Methods

* [init](_impl_curlhash_.curlhash.md#init)
* [localAttachToTangle](_impl_curlhash_.curlhash.md#localattachtotangle)



---
## Methods
<a id="init"></a>

###  init

► **init**(iota: *`any`*): `void`



*Implementation of [ICurlHash](../interfaces/_api_curlhash_.icurlhash.md).[init](../interfaces/_api_curlhash_.icurlhash.md#init)*

*Defined in [impl/CurlHash.ts:17](https://github.com/thedewpoint/iota-basic/blob/714f837/src/impl/CurlHash.ts#L17)*



init function takes the iotaclient and overrides attachToTangle


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| iota | `any`   |  The iota.lib.js client for overriding attachToTangle to do pow locally. |





**Returns:** `void`





___

<a id="localattachtotangle"></a>

### «Private» localAttachToTangle

► **localAttachToTangle**(trunkTransaction: *`any`*, branchTransaction: *`any`*, minWeightMagnitude: *`number`*, trytes: *`any`*, callback: *`any`*): `void`



*Defined in [impl/CurlHash.ts:25](https://github.com/thedewpoint/iota-basic/blob/714f837/src/impl/CurlHash.ts#L25)*



localAttachToTangle function code shamelessly stolen from the official ledger wallet. This function is private and not available to be called publicly


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trunkTransaction | `any`   |  - |
| branchTransaction | `any`   |  - |
| minWeightMagnitude | `number`   |  - |
| trytes | `any`   |  - |
| callback | `any`   |  - |





**Returns:** `void`





___


