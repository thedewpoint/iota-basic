[iota-basic](../README.md) > ["impl/CurlHashWebGl"](../modules/_impl_curlhashwebgl_.md) > [CurlHashWebGl](../classes/_impl_curlhashwebgl_.curlhashwebgl.md)



# Class: CurlHashWebGl


CurlHashWebGl leverages the webgl2 library in browser through the curl.lib.js dependency this implementation only works on browsers since it is dependent on the webgl interface
*__class__*: 


## Implements

* [ICurlHash](../interfaces/_api_curlhash_.icurlhash.md)

## Index

### Methods

* [getAttach](_impl_curlhashwebgl_.curlhashwebgl.md#getattach)
* [init](_impl_curlhashwebgl_.curlhashwebgl.md#init)



---

## Methods
<a id="getattach"></a>

### «Private» getAttach

► **getAttach**(iota: *`any`*): `localAttachToTangle`



*Defined in [impl/CurlHashWebGl.ts:24](https://github.com/thedewpoint/iota-basic/blob/714f837/src/impl/CurlHashWebGl.ts#L24)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| iota | `any`   |  - |





**Returns:** `localAttachToTangle`





___

<a id="init"></a>

###  init

► **init**(iota: *`any`*): `void`



*Implementation of [ICurlHash](../interfaces/_api_curlhash_.icurlhash.md).[init](../interfaces/_api_curlhash_.icurlhash.md#init)*

*Defined in [impl/CurlHashWebGl.ts:18](https://github.com/thedewpoint/iota-basic/blob/714f837/src/impl/CurlHashWebGl.ts#L18)*



init function takes the iotaclient and overrides attachToTangle. attach workaround shamelessly inspired/stolen from transaction spammer [https://github.com/pRizz/iota.transactionSpammer.js/blob/9ad59895a846849adf344de9d0d52b0ff83b8e2c/src/transactionSpammer.js#L224](https://github.com/pRizz/iota.transactionSpammer.js/blob/9ad59895a846849adf344de9d0d52b0ff83b8e2c/src/transactionSpammer.js#L224)


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| iota | `any`   |  The iota.lib.js client for overriding attachToTangle to do pow locally. |





**Returns:** `void`





___


