



# IotAuth
[![Build Status](https://travis-ci.org/thedewpoint/iotauth.svg?branch=master)](https://travis-ci.org/thedewpoint/iotauth.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/thedewpoint/iotauth/badge.svg?branch=master)](https://coveralls.io/github/thedewpoint/iotauth?branch=master)
[![dependencies Status](https://david-dm.org/thedewpoint/iotauth/status.svg)](https://david-dm.org/thedewpoint/iotauth)  [![devDependencies Status](https://david-dm.org/thedewpoint/iotauth/dev-status.svg)](https://david-dm.org/thedewpoint/iotauth?type=dev) 
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![NSP Status](https://nodesecurity.io/orgs/iotauth/projects/22c41dd7-6337-444e-bbbd-e9bb83b6d185/badge)](https://nodesecurity.io/orgs/iotauth/projects/22c41dd7-6337-444e-bbbd-e9bb83b6d185)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fthedewpoint%2Fiotauth.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fthedewpoint%2Fiotauth?ref=badge_shield)
<img align="right" height="260" src="https://raw.githubusercontent.com/thedewpoint/iotauth/master/iotauth.png">
iotauth is a 2fa module built on iota's tangle ledger. Sites wishing to implement this authentication method would follow this flow.
1. present user with a seed or allow them to provide a seed.
2. user backs up seed
3. site or app stores users' seed as well.
4. user attempts to log in to site
5. site presents user with a generated code
6. user must send a 0 value transaction to their own public address (without reusing an address) containing the code provided by the site.
7. The transaction must be sent within the timeframe specified by the site or application (Defaults to infinity)


Using npm:
```shell
$ npm i --save iotauth
```

In Node.js:
```js
import { IotAuth } from 'iotauth';

const iotaAuth = new IotAuth();
//generate a new seed automatically to present to user /store
let seed = await iotaAuth.getSeed();

//generate a validation code, uses seed generation and takes 6 characters from that. You can also generate your own //validation code, this method is optional to use. All that matters is that you pass in the code you gave the user during //the validation phase
let code = await iotaAuth.generateValidationCode();
//returns "ABCDEF"


//initialize with stored seed / passed seed from user
const seed ='PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM';
const iotaAuth = new IotAuth(seed);


//pass validation code
let code = 'LMNOPQ';
let isValid = await iotaAuth.isTransactionValid(code);


```
## Index

### External modules

* ["api/iotauth-api"](modules/_api_iotauth_api_.md)
* ["impl/iotauth"](modules/_impl_iotauth_.md)



---
