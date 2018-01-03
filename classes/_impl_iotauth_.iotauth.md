[iotauth](../README.md) > ["impl/iotauth"](../modules/_impl_iotauth_.md) > [IotAuth](../classes/_impl_iotauth_.iotauth.md)



# Class: IotAuth

## Implements

* [IIotAuth](../interfaces/_api_iotauth_api_.iiotauth.md)

## Index

### Constructors

* [constructor](_impl_iotauth_.iotauth.md#constructor)


### Properties

* [duration](_impl_iotauth_.iotauth.md#duration)
* [iotaClient](_impl_iotauth_.iotauth.md#iotaclient)
* [receiveSeed](_impl_iotauth_.iotauth.md#receiveseed)


### Methods

* [generateNewSeed](_impl_iotauth_.iotauth.md#generatenewseed)
* [generateValidationCode](_impl_iotauth_.iotauth.md#generatevalidationcode)
* [getAccountData](_impl_iotauth_.iotauth.md#getaccountdata)
* [getNewAddress](_impl_iotauth_.iotauth.md#getnewaddress)
* [getSeed](_impl_iotauth_.iotauth.md#getseed)
* [isTransactionValid](_impl_iotauth_.iotauth.md#istransactionvalid)
* [isValidAddress](_impl_iotauth_.iotauth.md#isvalidaddress)
* [isValidTimestamp](_impl_iotauth_.iotauth.md#isvalidtimestamp)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new IotAuth**(seed?: *`undefined`⎮`string`*, duration?: *`number`*, node?: *`string`*): [IotAuth](_impl_iotauth_.iotauth.md)


*Defined in [impl/iotauth.ts:8](https://github.com/thedewpoint/iotauth/blob/618cf32/src/impl/iotauth.ts#L8)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| seed | `undefined`⎮`string`  | - |   - |
| duration | `number`  |  Infinity |   - |
| node | `string`  | &quot;https://nodes.iota.cafe&quot; |   - |





**Returns:** [IotAuth](_impl_iotauth_.iotauth.md)

---


## Properties
<a id="duration"></a>

### «Private» duration

**●  duration**:  *`number`* 

*Defined in [impl/iotauth.ts:8](https://github.com/thedewpoint/iotauth/blob/618cf32/src/impl/iotauth.ts#L8)*





___

<a id="iotaclient"></a>

###  iotaClient

**●  iotaClient**:  *`any`* 

*Defined in [impl/iotauth.ts:6](https://github.com/thedewpoint/iotauth/blob/618cf32/src/impl/iotauth.ts#L6)*





___

<a id="receiveseed"></a>

### «Private» receiveSeed

**●  receiveSeed**:  *`string`* 

*Defined in [impl/iotauth.ts:7](https://github.com/thedewpoint/iotauth/blob/618cf32/src/impl/iotauth.ts#L7)*





___


## Methods
<a id="generatenewseed"></a>

### «Private» generateNewSeed

► **generateNewSeed**(): `Promise`.<`string`>



*Defined in [impl/iotauth.ts:85](https://github.com/thedewpoint/iotauth/blob/618cf32/src/impl/iotauth.ts#L85)*





**Returns:** `Promise`.<`string`>





___

<a id="generatevalidationcode"></a>

###  generateValidationCode

► **generateValidationCode**(): `Promise`.<`string`>



*Implementation of [IIotAuth](../interfaces/_api_iotauth_api_.iiotauth.md).[generateValidationCode](../interfaces/_api_iotauth_api_.iiotauth.md#generatevalidationcode)*

*Defined in [impl/iotauth.ts:46](https://github.com/thedewpoint/iotauth/blob/618cf32/src/impl/iotauth.ts#L46)*





**Returns:** `Promise`.<`string`>





___

<a id="getaccountdata"></a>

### «Private» getAccountData

► **getAccountData**(seed: *`string`*): `Promise`.<`any`>



*Defined in [impl/iotauth.ts:90](https://github.com/thedewpoint/iotauth/blob/618cf32/src/impl/iotauth.ts#L90)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `string`   |  - |





**Returns:** `Promise`.<`any`>





___

<a id="getnewaddress"></a>

### «Private» getNewAddress

► **getNewAddress**(seed: *`string`*, options?: *`any`*): `Promise`.<`string`>



*Defined in [impl/iotauth.ts:50](https://github.com/thedewpoint/iotauth/blob/618cf32/src/impl/iotauth.ts#L50)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| seed | `string`  | - |   - |
| options | `any`  |  { index: 0, returnAll: true } |   - |





**Returns:** `Promise`.<`string`>





___

<a id="getseed"></a>

###  getSeed

► **getSeed**(): `Promise`.<`string`>



*Implementation of [IIotAuth](../interfaces/_api_iotauth_api_.iiotauth.md).[getSeed](../interfaces/_api_iotauth_api_.iiotauth.md#getseed)*

*Defined in [impl/iotauth.ts:40](https://github.com/thedewpoint/iotauth/blob/618cf32/src/impl/iotauth.ts#L40)*





**Returns:** `Promise`.<`string`>





___

<a id="istransactionvalid"></a>

###  isTransactionValid

► **isTransactionValid**(validationCode: *`string`*): `Promise`.<`boolean`>



*Implementation of [IIotAuth](../interfaces/_api_iotauth_api_.iiotauth.md).[isTransactionValid](../interfaces/_api_iotauth_api_.iiotauth.md#istransactionvalid)*

*Defined in [impl/iotauth.ts:22](https://github.com/thedewpoint/iotauth/blob/618cf32/src/impl/iotauth.ts#L22)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| validationCode | `string`   |  - |





**Returns:** `Promise`.<`boolean`>





___

<a id="isvalidaddress"></a>

### «Private» isValidAddress

► **isValidAddress**(receiveAddress: *`string`*, index: *`number`*): `Promise`.<`boolean`>



*Defined in [impl/iotauth.ts:69](https://github.com/thedewpoint/iotauth/blob/618cf32/src/impl/iotauth.ts#L69)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| receiveAddress | `string`   |  - |
| index | `number`   |  - |





**Returns:** `Promise`.<`boolean`>





___

<a id="isvalidtimestamp"></a>

### «Private» isValidTimestamp

► **isValidTimestamp**(timestamp: *`number`*): `boolean`



*Defined in [impl/iotauth.ts:79](https://github.com/thedewpoint/iotauth/blob/618cf32/src/impl/iotauth.ts#L79)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| timestamp | `number`   |  - |





**Returns:** `boolean`





___


