import { IotAuth } from '../src/index';

test('Should create an Iota Client with sanbox node by default', () => {
  const iotaAuth = new IotAuth();
  expect(iotaAuth.iotaClient).toBeDefined();
});
