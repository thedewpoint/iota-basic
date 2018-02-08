




# Iota-basic
[![Build Status](https://travis-ci.org/thedewpoint/iotauth.svg?branch=master)](https://travis-ci.org/thedewpoint/iota-basic.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/thedewpoint/iota-basic/badge.svg?branch=master&service=github)](https://coveralls.io/github/thedewpoint/iota-basic?branch=master)
[![dependencies Status](https://david-dm.org/thedewpoint/iota-basic/status.svg)](https://david-dm.org/thedewpoint/iota-basic)  [![devDependencies Status](https://david-dm.org/thedewpoint/iota-basic/dev-status.svg)](https://david-dm.org/thedewpoint/iota-basic?type=dev) 
[![AUR](https://img.shields.io/aur/license/yaourt.svg)]()
[![NSP Status](https://nodesecurity.io/orgs/iota-basic/projects/3e32075b-34e3-4847-a495-e5d5e70a3022/badge)](https://nodesecurity.io/orgs/iota-basic/projects/3e32075b-34e3-4847-a495-e5d5e70a3022)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
<img align="right" height="200" width="300" src="https://raw.githubusercontent.com/thedewpoint/iota-basic/master/iota-basic.png">
Iota-Basic was born out of my desire to write my own wallet or program that interacts with Iota's tangle ledger.
There are many pieces to learn in order to successfully interact with the API, and Iota-Basic aims to simplify that by bringing them all together and integrating them for you in one module.This library automatically detects if you are running in Node or in the browser and uses different implementations for generating seeds or doing proof of work behind the scenes. The way you interact with the library remains the same. This library provides the necessary binaries  (From the official release repo)  for the 3 major platforms (mac, linux, windows) when running on node, and it also provides the interface for the webgl2 implementation if you are in a browser. The goal is to reduce the learning curve for anyone who wants to code with Iota tangle and do simple code interactions.

Only Node version 8.x.x is supported at this time due to FFI not working on node version 9.
related issue: https://github.com/node-ffi/node-ffi/issues/438

NOTE: As of version 2.0 seed generation has been moved as a directive from the foundation for no 3rd party seed generators. 

Using npm:
```shell
$ npm i --save iota-basic
```

In Node.js:
```js
//with imports
import { Iota } from 'iota-basic';

//with require
const Iota = require('iota-basic').Iota;

const iota = new Iota("YOURSEED9999999999999999999999999999999999999999999999999999999999999");

//send iota to someone doing pow locally
iota.sendTransaction("RECEIVEADDRESS9999",1).then((success)=>{
    console.log("success",success);
});

//with await async
const success = await iota.sendTransaction("RECEIVEADDRESS9999",1);

//sending data
const success = await iota.sendTransaction("RECEIVEADDRESS9999",1, {data: "someData"});

//sending data with valid tag (27 characters or less, all TRYTES)
const success = await iota.sendTransaction("RECEIVEADDRESS9999",1, {data: "someData"}, "TAG9");

//getting accountdata for your seed
const accountData = await iota.getAccountData();

//just return the balance of your seed
const balance = await iota.getBalance();

//get the checksum for your seed to know that you entered it correctly
const checkSum = await iota.getCheckSum();

//get the receive address for your seed without any transactions
const receiveAddress = await iota.getReceiveAddress();

```

## Index

### External modules

* ["api/AccountData"](modules/_api_accountdata_.md)
* ["api/CurlHash"](modules/_api_curlhash_.md)
* ["api/IotaBasic"](modules/_api_iotabasic_.md)
* ["api/SeedGenerator"](modules/_api_seedgenerator_.md)
* ["impl/CurlFactory"](modules/_impl_curlfactory_.md)
* ["impl/CurlHash"](modules/_impl_curlhash_.md)
* ["impl/CurlHashWebGl"](modules/_impl_curlhashwebgl_.md)
* ["impl/IotaBasic"](modules/_impl_iotabasic_.md)




---
