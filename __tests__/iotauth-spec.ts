import { IotAuth } from '../src/index';
const accountData = require('./accountdata.json');
const accountDataReuse = require('./accountdata.addressreuse.json');
const accountDataReuseCorrected = require('./accountdata.addressreuse.corrected.json');

beforeAll(() => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
});

test('Should create an Iota Client with sanbox node by default', () => {
  const iotaAuth = new IotAuth();
  expect(iotaAuth.iotaClient).toBeDefined();
});
test('Should generate a new seed if one is not provided', async () => {
  const iotaAuth = new IotAuth();
  let seed = await iotaAuth.getSeed();
  expect(iotaAuth.iotaClient.valid.isTrytes(seed, 81)).toBe(true);
});
test('Should generate a verification code', async () => {
  const iotaAuth = new IotAuth();
  let code = await iotaAuth.generateValidationCode();
  expect(iotaAuth.iotaClient.valid.isTrytes(code, 6)).toBe(true);
});
test('Should set the seed if provided', async () => {
  const seed =
    'PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM';
  const iotaAuth = new IotAuth(seed);
  let mySeed = await iotaAuth.getSeed();
  expect(mySeed).toEqual(seed);
});

test('isTransactionValid should return true for valid authentication if the transaction code is sent from the expected address', async () => {
  const seed =
    'PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM';
  const getAccountData = jest.fn().mockImplementation(function(seed, callback) {
    callback(null, accountData);
  });
  const getNewAddress = jest
    .fn()
    .mockImplementation(function(seed, options, callback) {
      callback(
        null,
        [
          'QEL99XNPRACLRNEHKQXKNJXPKCPYNUYQIVNELMVFUQPQMVLIJTUGJL9XPDNKJFANOAJB9FCKKAMFEERSW',
        ],
        []
      );
    });
  const iotaAuth = new IotAuth(seed);
  iotaAuth.iotaClient.api.getAccountData = getAccountData.bind(
    iotaAuth.iotaClient.api
  );
  iotaAuth.iotaClient.api.getNewAddress = getNewAddress.bind(
    iotaAuth.iotaClient.api
  );
  let code = 'LMNOPQ';
  let isValid = await iotaAuth.isTransactionValid(code);
  expect(isValid).toBe(true);
});
test('isTransactionValid should return false for valid authentication if the transaction code is sent from the expected address but has expired based on duration', async () => {
  const seed =
    'PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM';
  const getAccountData = jest.fn().mockImplementation(function(seed, callback) {
    callback(null, accountData);
  });
  const getNewAddress = jest
    .fn()
    .mockImplementation(function(seed, options, callback) {
      callback(
        null,
        [
          'QEL99XNPRACLRNEHKQXKNJXPKCPYNUYQIVNELMVFUQPQMVLIJTUGJL9XPDNKJFANOAJB9FCKKAMFEERSW',
        ],
        []
      );
    });
  const iotaAuth = new IotAuth(seed, 6);
  iotaAuth.iotaClient.api.getAccountData = getAccountData.bind(
    iotaAuth.iotaClient.api
  );
  iotaAuth.iotaClient.api.getNewAddress = getNewAddress.bind(
    iotaAuth.iotaClient.api
  );
  let code = 'LMNOPQ';
  let isValid = await iotaAuth.isTransactionValid(code);
  expect(isValid).toBe(false);
});
test('isTransactionValid should return false for valid authentication if the transaction code is incorrect', async () => {
  const seed =
    'PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM';
  const getAccountData = jest.fn().mockImplementation(function(seed, callback) {
    callback(null, accountData);
  });
  const getNewAddress = jest
    .fn()
    .mockImplementation(function(seed, options, callback) {
      callback(
        null,
        [
          'QEL99XNPRACLRNEHKQXKNJXPKCPYNUYQIVNELMVFUQPQMVLIJTUGJL9XPDNKJFANOAJB9FCKKAMFEERSW',
        ],
        []
      );
    });
  const iotaAuth = new IotAuth(seed);
  iotaAuth.iotaClient.api.getAccountData = getAccountData.bind(
    iotaAuth.iotaClient.api
  );
  iotaAuth.iotaClient.api.getNewAddress = getNewAddress.bind(
    iotaAuth.iotaClient.api
  );
  let code = 'ABCDEF';
  let isValid = await iotaAuth.isTransactionValid(code);
  expect(isValid).toBe(false);
});
test('isTransactionValid should return false for valid authentication if the address is reused', async () => {
  const seed =
    'PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM';
  const getAccountData = jest.fn().mockImplementation(function(seed, callback) {
    callback(null, accountDataReuse);
  });
  const getNewAddress = jest
    .fn()
    .mockImplementation(function(seed, options, callback) {
      callback(
        null,
        [
          'QEL99XNPRACLRNEHKQXKNJXPKCPYNUYQIVNELMVFUQPQMVLIJTUGJL9XPDNKJFANOAJB9FCKKAMFEERSW',
          'YWNET9JHIIGBECEMCRULUOEYLDIRRPKRNJNUNXBBBWJWITEAYMSRGAPDGBLNUCYRLWPHTEKPSRZICEVYB',
        ],
        []
      );
    });
  const iotaAuth = new IotAuth(seed);
  iotaAuth.iotaClient.api.getAccountData = getAccountData.bind(
    iotaAuth.iotaClient.api
  );
  iotaAuth.iotaClient.api.getNewAddress = getNewAddress.bind(
    iotaAuth.iotaClient.api
  );
  let code = 'LMNOPQ';
  let isValid = await iotaAuth.isTransactionValid(code);
  expect(isValid).toBe(false);
});
test('isTransactionValid should return true for valid authentication if the address is reused but then corrected', async () => {
  const seed =
    'PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM';
  const getAccountData = jest.fn().mockImplementation(function(seed, callback) {
    callback(null, accountDataReuseCorrected);
  });
  const getNewAddress = jest
    .fn()
    .mockImplementation(function(seed, options, callback) {
      callback(
        null,
        [
          'QEL99XNPRACLRNEHKQXKNJXPKCPYNUYQIVNELMVFUQPQMVLIJTUGJL9XPDNKJFANOAJB9FCKKAMFEERSW',
          'YWNET9JHIIGBECEMCRULUOEYLDIRRPKRNJNUNXBBBWJWITEAYMSRGAPDGBLNUCYRLWPHTEKPSRZICEVYB',
        ],
        []
      );
    });
  const iotaAuth = new IotAuth(seed);
  iotaAuth.iotaClient.api.getAccountData = getAccountData.bind(
    iotaAuth.iotaClient.api
  );
  iotaAuth.iotaClient.api.getNewAddress = getNewAddress.bind(
    iotaAuth.iotaClient.api
  );
  let code = 'LMNOPQ';
  let isValid = await iotaAuth.isTransactionValid(code);
  expect(isValid).toBe(true);
});

test('isTransactionValid should return true for valid authentication if no code is specified', async () => {
  const seed =
    'PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM';
  const getAccountData = jest.fn().mockImplementation(function(seed, callback) {
    callback(null, accountDataReuseCorrected);
  });
  const getNewAddress = jest
    .fn()
    .mockImplementation(function(seed, options, callback) {
      callback(
        null,
        [
          'QEL99XNPRACLRNEHKQXKNJXPKCPYNUYQIVNELMVFUQPQMVLIJTUGJL9XPDNKJFANOAJB9FCKKAMFEERSW',
          'YWNET9JHIIGBECEMCRULUOEYLDIRRPKRNJNUNXBBBWJWITEAYMSRGAPDGBLNUCYRLWPHTEKPSRZICEVYB',
        ],
        []
      );
    });
  const iotaAuth = new IotAuth(seed);
  iotaAuth.iotaClient.api.getAccountData = getAccountData.bind(
    iotaAuth.iotaClient.api
  );
  iotaAuth.iotaClient.api.getNewAddress = getNewAddress.bind(
    iotaAuth.iotaClient.api
  );
  let code = 'LMNOPQ';
  let isValid = await iotaAuth.isTransactionValid();
  expect(isValid).toBe(true);
});
