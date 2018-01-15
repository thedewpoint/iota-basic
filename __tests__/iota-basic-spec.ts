import * as IOTA from 'iota.lib.js';
import { Iota, IIota } from '../src/index';

const testSeed =
  'PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM';
var iotaClient;

beforeAll(() => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  iotaClient = new IOTA({
    provider: 'https://iotanode.us:443',
  });
  const getNewAddress = jest
  .fn()
  .mockImplementation(function(seed, options, callback) {
    callback(
      null,
      "ZYORXWKBB9EBD9EDWTYDUVVGSSJMYDRIWUZOKUGEKUQLZUWKDOWYWDEAFQTCNMXNXBXKJBIIMLEIHMPLZ"
    );
  });
    iotaClient.api.getNewAddress = getNewAddress.bind(
    iotaClient.api
  );

});

afterEach(() => {
  jest.resetModules();
});
test('should return a receive address', async () => {
  const iota: IIota = new Iota(testSeed,"",iotaClient);
  let receiveAddress = await iota.getReceiveAddress();
  expect(iotaClient.valid.isAddress(receiveAddress)).toBe(true);
});
// test('Should generate a new seed if one is not provided', async () => {
//   const iotaAuth = new IotAuth();
//   let seed = await iotaAuth.getSeed();
//   expect(iotaAuth.iotaClient.valid.isTrytes(seed, 81)).toBe(true);
// });
// test('Should generate a verification code', async () => {
//   const iotaAuth = new IotAuth();
//   let code = await iotaAuth.generateValidationCode();
//   expect(iotaAuth.iotaClient.valid.isTrytes(code, 6)).toBe(true);
// });
// test('Should set the seed if provided', async () => {
//   const seed =
//     'PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM';
//   const iotaAuth = new IotAuth(seed);
//   let mySeed = await iotaAuth.getSeed();
//   expect(mySeed).toEqual(seed);
// });

// test('isTransactionValid should return true for valid authentication if the transaction code is sent from the expected address', async () => {
//   const seed =
//     'PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM';
//   const getAccountData = jest.fn().mockImplementation(function(seed, callback) {
//     callback(null, require('./accountdata.json'));
//   });
//   const getNewAddress = jest
//     .fn()
//     .mockImplementation(function(seed, options, callback) {
//       callback(
//         null,
//         [
//           'QEL99XNPRACLRNEHKQXKNJXPKCPYNUYQIVNELMVFUQPQMVLIJTUGJL9XPDNKJFANOAJB9FCKKAMFEERSW',
//           'YWNET9JHIIGBECEMCRULUOEYLDIRRPKRNJNUNXBBBWJWITEAYMSRGAPDGBLNUCYRLWPHTEKPSRZICEVYB',
//         ],
//         []
//       );
//     });
//   const iotaAuth = new IotAuth(seed);
//   iotaAuth.iotaClient.api.getAccountData = getAccountData.bind(
//     iotaAuth.iotaClient.api
//   );
//   iotaAuth.iotaClient.api.getNewAddress = getNewAddress.bind(
//     iotaAuth.iotaClient.api
//   );
//   let code = 'LMNOPQ';
//   let isValid = await iotaAuth.isTransactionValid(code);
//   expect(isValid).toBe(true);
// });
// test('isTransactionValid should return false for valid authentication if the transaction code is sent from the expected address but has expired based on duration', async () => {
//   const seed =
//     'PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM';
//   const getAccountData = jest.fn().mockImplementation(function(seed, callback) {
//     callback(null, require('./accountdata.json'));
//   });
//   const getNewAddress = jest
//     .fn()
//     .mockImplementation(function(seed, options, callback) {
//       callback(
//         null,
//         [
//           'QEL99XNPRACLRNEHKQXKNJXPKCPYNUYQIVNELMVFUQPQMVLIJTUGJL9XPDNKJFANOAJB9FCKKAMFEERSW',
//           'YWNET9JHIIGBECEMCRULUOEYLDIRRPKRNJNUNXBBBWJWITEAYMSRGAPDGBLNUCYRLWPHTEKPSRZICEVYB',
//         ],
//         []
//       );
//     });
//   const iotaAuth = new IotAuth(seed, 6);
//   iotaAuth.iotaClient.api.getAccountData = getAccountData.bind(
//     iotaAuth.iotaClient.api
//   );
//   iotaAuth.iotaClient.api.getNewAddress = getNewAddress.bind(
//     iotaAuth.iotaClient.api
//   );
//   let code = 'LMNOPQ';
//   let isValid = await iotaAuth.isTransactionValid(code);

//   expect(isValid).toBe(false);
// });
// test('isTransactionValid should return false for valid authentication if the transaction code is incorrect', async () => {
//   const seed =
//     'PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM';
//   const getAccountData = jest.fn().mockImplementation(function(seed, callback) {
//     callback(null, require('./accountdata.json'));
//   });
//   const getNewAddress = jest
//     .fn()
//     .mockImplementation(function(seed, options, callback) {
//       callback(
//         null,
//         [
//           'QEL99XNPRACLRNEHKQXKNJXPKCPYNUYQIVNELMVFUQPQMVLIJTUGJL9XPDNKJFANOAJB9FCKKAMFEERSW',
//           'YWNET9JHIIGBECEMCRULUOEYLDIRRPKRNJNUNXBBBWJWITEAYMSRGAPDGBLNUCYRLWPHTEKPSRZICEVYB',
//         ],
//         []
//       );
//     });
//   const iotaAuth = new IotAuth(seed);
//   iotaAuth.iotaClient.api.getAccountData = getAccountData.bind(
//     iotaAuth.iotaClient.api
//   );
//   iotaAuth.iotaClient.api.getNewAddress = getNewAddress.bind(
//     iotaAuth.iotaClient.api
//   );
//   let code = 'ABCDEF';
//   let isValid = await iotaAuth.isTransactionValid(code);

//   expect(isValid).toBe(false);
// });
// test('isTransactionValid should return false when an error is thrown', async () => {
//   const seed =
//     'PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM';
//   const getAccountData = jest.fn().mockImplementation(function(seed, callback) {
//     callback(null, null);
//   });
//   const getNewAddress = jest
//     .fn()
//     .mockImplementation(function(seed, options, callback) {
//       callback(
//         null,
//         [
//           'QEL99XNPRACLRNEHKQXKNJXPKCPYNUYQIVNELMVFUQPQMVLIJTUGJL9XPDNKJFANOAJB9FCKKAMFEERSW',
//           'YWNET9JHIIGBECEMCRULUOEYLDIRRPKRNJNUNXBBBWJWITEAYMSRGAPDGBLNUCYRLWPHTEKPSRZICEVYB',
//         ],
//         []
//       );
//     });
//   const iotaAuth = new IotAuth(seed);
//   iotaAuth.iotaClient.api.getAccountData = getAccountData.bind(
//     iotaAuth.iotaClient.api
//   );
//   iotaAuth.iotaClient.api.getNewAddress = getNewAddress.bind(
//     iotaAuth.iotaClient.api
//   );
//   let code = 'ABCDEF';
//   let isValid = await iotaAuth.isTransactionValid(code);

//   expect(isValid).toBe(false);
// });
// test('isTransactionValid should return false for valid authentication if the address is reused', async () => {
//   const seed =
//     'PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM';
//   const getAccountData = jest.fn().mockImplementation(function(seed, callback) {
//     callback(null, require('./accountdata.addressreuse.json'));
//   });
//   const getNewAddress = jest
//     .fn()
//     .mockImplementation(function(seed, options, callback) {
//       callback(
//         null,
//         [
//           'QEL99XNPRACLRNEHKQXKNJXPKCPYNUYQIVNELMVFUQPQMVLIJTUGJL9XPDNKJFANOAJB9FCKKAMFEERSW',
//           'YWNET9JHIIGBECEMCRULUOEYLDIRRPKRNJNUNXBBBWJWITEAYMSRGAPDGBLNUCYRLWPHTEKPSRZICEVYB',
//         ],
//         []
//       );
//     });
//   const iotaAuth = new IotAuth(seed);
//   iotaAuth.iotaClient.api.getAccountData = getAccountData.bind(
//     iotaAuth.iotaClient.api
//   );
//   iotaAuth.iotaClient.api.getNewAddress = getNewAddress.bind(
//     iotaAuth.iotaClient.api
//   );
//   let code = 'LMNOPQ';
//   let isValid = await iotaAuth.isTransactionValid(code);
//   expect(isValid).toBe(false);
// });
// test('isTransactionValid should return true for valid authentication if the address is reused but then corrected', async () => {
//   const seed =
//     'PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM';
//   const getAccountData = jest.fn().mockImplementation(function(seed, callback) {
//     callback(null, require('./accountdata.addressreuse.corrected.json'));
//   });
//   const getNewAddress = jest
//     .fn()
//     .mockImplementation(function(seed, options, callback) {
//       callback(
//         null,
//         [
//           'QEL99XNPRACLRNEHKQXKNJXPKCPYNUYQIVNELMVFUQPQMVLIJTUGJL9XPDNKJFANOAJB9FCKKAMFEERSW',
//           'YWNET9JHIIGBECEMCRULUOEYLDIRRPKRNJNUNXBBBWJWITEAYMSRGAPDGBLNUCYRLWPHTEKPSRZICEVYB',
//           'QYCMFMSLBK9SHOJLDFZMKGXNEGZOUWJJAMVDSMQEDQHKEAVXBHLKTKEB9ZWCNENHYTOASADLTVJVAETUW',
//         ],
//         []
//       );
//     });
//   const iotaAuth = new IotAuth(seed);
//   iotaAuth.iotaClient.api.getAccountData = getAccountData.bind(
//     iotaAuth.iotaClient.api
//   );
//   iotaAuth.iotaClient.api.getNewAddress = getNewAddress.bind(
//     iotaAuth.iotaClient.api
//   );
//   let code = 'LMNOPQ';
//   let isValid = await iotaAuth.isTransactionValid(code);

//   expect(isValid).toBe(true);
// });

// test('isTransactionValid should return true for valid authentication if no code is specified', async () => {
//   const seed =
//     'PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM';
//   const getAccountData = jest.fn().mockImplementation(function(seed, callback) {
//     callback(null, require('./accountdata.addressreuse.corrected.json'));
//   });
//   const getNewAddress = jest
//     .fn()
//     .mockImplementation(function(seed, options, callback) {
//       callback(
//         null,
//         [
//           'QEL99XNPRACLRNEHKQXKNJXPKCPYNUYQIVNELMVFUQPQMVLIJTUGJL9XPDNKJFANOAJB9FCKKAMFEERSW',
//           'YWNET9JHIIGBECEMCRULUOEYLDIRRPKRNJNUNXBBBWJWITEAYMSRGAPDGBLNUCYRLWPHTEKPSRZICEVYB',
//           'QYCMFMSLBK9SHOJLDFZMKGXNEGZOUWJJAMVDSMQEDQHKEAVXBHLKTKEB9ZWCNENHYTOASADLTVJVAETUW',
//         ],
//         []
//       );
//     });
//   const iotaAuth = new IotAuth(seed);
//   iotaAuth.iotaClient.api.getAccountData = getAccountData.bind(
//     iotaAuth.iotaClient.api
//   );
//   iotaAuth.iotaClient.api.getNewAddress = getNewAddress.bind(
//     iotaAuth.iotaClient.api
//   );
//   let code = 'LMNOPQ';
//   let isValid = await iotaAuth.isTransactionValid();
//   expect(isValid).toBe(true);
// });
