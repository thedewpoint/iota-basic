[iota-basic](../README.md) > ["api/IotaBasic"](../modules/_api_iotabasic_.md) > [IIotaBasic](../interfaces/_api_iotabasic_.iiotabasic.md)



# Interface: IIotaBasic


Interface describing the basic methods exposed by any implementation of IotaBasic API

## Implemented by

* [Iota](../classes/_impl_iotabasic_.iota.md)


## Methods
<a id="generateseed"></a>

###  generateSeed

► **generateSeed**(): `Promise`.<`string`>



*Defined in [api/IotaBasic.ts:8](https://github.com/thedewpoint/iota-basic/blob/243d8a8/src/api/IotaBasic.ts#L8)*





**Returns:** `Promise`.<`string`>





___

<a id="getaccountdata"></a>

###  getAccountData

► **getAccountData**(): `Promise`.<[IAccountData](_api_accountdata_.iaccountdata.md)>



*Defined in [api/IotaBasic.ts:16](https://github.com/thedewpoint/iota-basic/blob/243d8a8/src/api/IotaBasic.ts#L16)*





**Returns:** `Promise`.<[IAccountData](_api_accountdata_.iaccountdata.md)>





___

<a id="getbalance"></a>

###  getBalance

► **getBalance**(): `Promise`.<`number`>



*Defined in [api/IotaBasic.ts:15](https://github.com/thedewpoint/iota-basic/blob/243d8a8/src/api/IotaBasic.ts#L15)*





**Returns:** `Promise`.<`number`>





___

<a id="getchecksum"></a>

###  getChecksum

► **getChecksum**(): `string`



*Defined in [api/IotaBasic.ts:14](https://github.com/thedewpoint/iota-basic/blob/243d8a8/src/api/IotaBasic.ts#L14)*





**Returns:** `string`





___

<a id="getreceiveaddress"></a>

###  getReceiveAddress

► **getReceiveAddress**(): `Promise`.<`string`>



*Defined in [api/IotaBasic.ts:7](https://github.com/thedewpoint/iota-basic/blob/243d8a8/src/api/IotaBasic.ts#L7)*





**Returns:** `Promise`.<`string`>





___

<a id="sendtransaction"></a>

###  sendTransaction

► **sendTransaction**(receivingAddress: *`string`*, value: *`number`*, data?: *`any`*): `Promise`.<`any`>



*Defined in [api/IotaBasic.ts:9](https://github.com/thedewpoint/iota-basic/blob/243d8a8/src/api/IotaBasic.ts#L9)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| receivingAddress | `string`   |  - |
| value | `number`   |  - |
| data | `any`   |  - |





**Returns:** `Promise`.<`any`>





___


