[iota-basic](../README.md) > ["impl/IotaBasic"](../modules/_impl_iotabasic_.md) > [Iota](../classes/_impl_iotabasic_.iota.md)



# Class: Iota


implementation of the IIotaBasic interface

## Implements

* [IIotaBasic](../interfaces/_api_iotabasic_.iiotabasic.md)

## Index

### Constructors

* [constructor](_impl_iotabasic_.iota.md#constructor)


### Properties

* [ccurlProvider](_impl_iotabasic_.iota.md#ccurlprovider)
* [iota](_impl_iotabasic_.iota.md#iota)
* [seed](_impl_iotabasic_.iota.md#seed)
* [seedGenerator](_impl_iotabasic_.iota.md#seedgenerator)


### Methods

* [generateSeed](_impl_iotabasic_.iota.md#generateseed)
* [getAccountData](_impl_iotabasic_.iota.md#getaccountdata)
* [getBalance](_impl_iotabasic_.iota.md#getbalance)
* [getChecksum](_impl_iotabasic_.iota.md#getchecksum)
* [getReceiveAddress](_impl_iotabasic_.iota.md#getreceiveaddress)
* [sendTransaction](_impl_iotabasic_.iota.md#sendtransaction)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Iota**(seed: *`string`*, node?: *`string`*, testClient?: *`any`*, pow?: *`boolean`*): [Iota](_impl_iotabasic_.iota.md)


*Defined in [impl/IotaBasic.ts:22](https://github.com/thedewpoint/iota-basic/blob/243d8a8/src/impl/IotaBasic.ts#L22)*



init function takes the iotaclient and overrides attachToTangle
*__constructor__*: 



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| seed | `string`  | - |   the seed to initialize with. |
| node | `string`  | &quot;https://iotanode.us:443&quot; |   the uri for the provider within iota.lib.js client, defaults to '[https://iotanode.us:443](https://iotanode.us:443)' |
| testClient | `any`  | - |   this parameter is strictly to make writing unit tests against this class easier and is not meant to be used' |
| pow | `boolean`  | true |   this parameter assumes you want to do pow locally and if not you can override it to false |





**Returns:** [Iota](_impl_iotabasic_.iota.md)

---


## Properties
<a id="ccurlprovider"></a>

###  ccurlProvider

**●  ccurlProvider**:  *[ICurlHash](../interfaces/_api_curlhash_.icurlhash.md)* 

*Defined in [impl/IotaBasic.ts:18](https://github.com/thedewpoint/iota-basic/blob/243d8a8/src/impl/IotaBasic.ts#L18)*





___

<a id="iota"></a>

### «Private» iota

**●  iota**:  *`any`* 

*Defined in [impl/IotaBasic.ts:22](https://github.com/thedewpoint/iota-basic/blob/243d8a8/src/impl/IotaBasic.ts#L22)*





___

<a id="seed"></a>

### «Private» seed

**●  seed**:  *`string`* 

*Defined in [impl/IotaBasic.ts:21](https://github.com/thedewpoint/iota-basic/blob/243d8a8/src/impl/IotaBasic.ts#L21)*





___

<a id="seedgenerator"></a>

###  seedGenerator

**●  seedGenerator**:  *[ISeedGenerator](../interfaces/_api_seedgenerator_.iseedgenerator.md)* 

*Defined in [impl/IotaBasic.ts:19](https://github.com/thedewpoint/iota-basic/blob/243d8a8/src/impl/IotaBasic.ts#L19)*





___


## Methods
<a id="generateseed"></a>

###  generateSeed

► **generateSeed**(): `Promise`.<`string`>



*Implementation of [IIotaBasic](../interfaces/_api_iotabasic_.iiotabasic.md).[generateSeed](../interfaces/_api_iotabasic_.iiotabasic.md#generateseed)*

*Defined in [impl/IotaBasic.ts:69](https://github.com/thedewpoint/iota-basic/blob/243d8a8/src/impl/IotaBasic.ts#L69)*



Generate a secure seed using an implementation of SeedGenerator




**Returns:** `Promise`.<`string`>





___

<a id="getaccountdata"></a>

###  getAccountData

► **getAccountData**(): `Promise`.<[IAccountData](../interfaces/_api_accountdata_.iaccountdata.md)>



*Implementation of [IIotaBasic](../interfaces/_api_iotabasic_.iiotabasic.md).[getAccountData](../interfaces/_api_iotabasic_.iiotabasic.md#getaccountdata)*

*Defined in [impl/IotaBasic.ts:121](https://github.com/thedewpoint/iota-basic/blob/243d8a8/src/impl/IotaBasic.ts#L121)*



returns the account data in the form of IAccountData from iota.lib.js for your seed




**Returns:** `Promise`.<[IAccountData](../interfaces/_api_accountdata_.iaccountdata.md)>





___

<a id="getbalance"></a>

###  getBalance

► **getBalance**(): `Promise`.<`number`>



*Implementation of [IIotaBasic](../interfaces/_api_iotabasic_.iiotabasic.md).[getBalance](../interfaces/_api_iotabasic_.iiotabasic.md#getbalance)*

*Defined in [impl/IotaBasic.ts:107](https://github.com/thedewpoint/iota-basic/blob/243d8a8/src/impl/IotaBasic.ts#L107)*



returns the balance of your seed




**Returns:** `Promise`.<`number`>





___

<a id="getchecksum"></a>

###  getChecksum

► **getChecksum**(): `string`



*Implementation of [IIotaBasic](../interfaces/_api_iotabasic_.iiotabasic.md).[getChecksum](../interfaces/_api_iotabasic_.iiotabasic.md#getchecksum)*

*Defined in [impl/IotaBasic.ts:139](https://github.com/thedewpoint/iota-basic/blob/243d8a8/src/impl/IotaBasic.ts#L139)*



generate a checksum for the seed to verify you entered it correctly. shamelessly stolen from official wallet




**Returns:** `string`





___

<a id="getreceiveaddress"></a>

###  getReceiveAddress

► **getReceiveAddress**(): `Promise`.<`string`>



*Implementation of [IIotaBasic](../interfaces/_api_iotabasic_.iiotabasic.md).[getReceiveAddress](../interfaces/_api_iotabasic_.iiotabasic.md#getreceiveaddress)*

*Defined in [impl/IotaBasic.ts:50](https://github.com/thedewpoint/iota-basic/blob/243d8a8/src/impl/IotaBasic.ts#L50)*



Generate the most recent receive address with no send transactions on it




**Returns:** `Promise`.<`string`>





___

<a id="sendtransaction"></a>

###  sendTransaction

► **sendTransaction**(receivingAddress: *`string`*, value: *`number`*, data?: *`any`*): `Promise`.<`any`>



*Implementation of [IIotaBasic](../interfaces/_api_iotabasic_.iiotabasic.md).[sendTransaction](../interfaces/_api_iotabasic_.iiotabasic.md#sendtransaction)*

*Defined in [impl/IotaBasic.ts:78](https://github.com/thedewpoint/iota-basic/blob/243d8a8/src/impl/IotaBasic.ts#L78)*



sendTransaction for sending value from your seed to another address or just sending data


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| receivingAddress | `string`   |  - |
| value | `number`   |  the amount in iota to send |
| data | `any`   |  json object representing any data you want to send with the transaction |





**Returns:** `Promise`.<`any`>





___


