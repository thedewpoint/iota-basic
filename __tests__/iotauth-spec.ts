import { IotAuth } from '../src/index';
const accountData = require('./accountdata.json');

beforeAll(() => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
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
  const seed = "PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM";
  const iotaAuth = new IotAuth(seed);
  let mySeed = await iotaAuth.getSeed();
  expect(mySeed).toEqual(seed);
});

test('isTransactionValid should return true for valid authentication if the transaction code is sent from the expected address', async () => {
  const seed = "PBGRWJXOALEOBXNUPCFUNWXSEXMYC9BVLLK9HMUDXNOETYJHSKBHDR9SWAWJIKVPFSBWNCNSQQJUFUPJM";
  const getAccountData = jest.fn().mockImplementation(function (seed, callback) {
    callback(null, accountData);
  });
  const iotaAuth = new IotAuth(seed);
  iotaAuth.iotaClient.api.getAccountData = getAccountData.bind(iotaAuth.iotaClient.api);
  let code = "LMNOPQ";
  let isValid = await iotaAuth.isTransactionValid(code);
  expect(isValid).toBe(true);
});

