import { IotAuth } from '../src/index';

beforeAll(() => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
});

test('Should create an Iota Client with sanbox node by default', () => {
  const iotaAuth = new IotAuth();
  expect(iotaAuth.iotaClient).toBeDefined();
});
test('Should generate a new seed', async () => {
  const iotaAuth = new IotAuth();
  let seed = await iotaAuth.generateNewSeed();
  expect(iotaAuth.iotaClient.valid.isTrytes(seed, 81)).toBe(true);
});
test('Should generate a verification code', async () => {
  const iotaAuth = new IotAuth();
  let code = await iotaAuth.generateValidationCode();
  expect(iotaAuth.iotaClient.valid.isTrytes(code, 6)).toBe(true);
});
test('Should generate a seed and public address if one is not provided', async () => {
  const iotaAuth = new IotAuth();
  let receiveAddress = await iotaAuth.getReceiveAddress();
  expect(iotaAuth.iotaClient.valid.isAddress(receiveAddress)).toBe(true);
});
test('Should generate the same receive address from seed', async () => {
  const iotaAuth = new IotAuth();
  let receiveAddress = await iotaAuth.getReceiveAddress();
  expect(iotaAuth.iotaClient.valid.isAddress(receiveAddress)).toBe(true);
  let newReceiveAddress = await iotaAuth.getReceiveAddress();
  expect(receiveAddress).toEqual(newReceiveAddress);
});
