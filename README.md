



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
5. user must send a 0 value transaction to their own public address (without reusing an address) 
6. The transaction must be sent within the timeframe specified by the site or application (Defaults to infinity)
7. optionally the app or site can specify a validation code for the user to be sent in json format {code: 'verificationcode'}.

This module uses iota-seed-generator to generate iota seeds. It appears this module uses windows powershell (when on windows) to generate a seed which I believe is not considered secure at this time. Please be aware of this when using the module. For more info check this github: https://github.com/bmavity/iota-seed-generator

related issue: https://github.com/bmavity/iota-seed-generator/issues/1


Using npm:
```shell
$ npm i --save iota-auth
```

In Node.js:
```js
//with imports
import { IotAuth } from 'iota-auth';

//with require
const IotAuth = require('iota-auth').IotAuth;

const iotaAuth = new IotAuth();
//generate a new seed automatically to present to user /store
let seed = await iotaAuth.getSeed();

//generate a validation code, uses seed generation and takes 6 characters from that. You can also generate your own //validation code, this method is optional to use. All that matters is that you pass in the code you gave the user during //the validation phase
let code = await iotaAuth.generateValidationCode();
//returns "ABCDEF"


//initialize with stored seed / passed seed from user
const seed ='PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM';
const iotaAuth = new IotAuth(seed);

//initialize with stored seed and expiration time (minutes)
const seed ='PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM';
const iotaAuth = new IotAuth(seed, 6);
//checks whether code was passed within 6 minutes

//pass validation code
let code = 'LMNOPQ';
let isValid = await iotaAuth.isTransactionValid(code);

//validate without a code
let isValid = await iotaAuth.isTransactionValid();


```
## Index

### External modules

* ["api/iotauth-api"](modules/_api_iotauth_api_.md)
* ["impl/iotauth"](modules/_impl_iotauth_.md)



---
