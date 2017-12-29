import { IotAuth } from '../src/index';

test('Should create an Iota Client with sanbox node by default', (done) => {
  const iotaAuth = new IotAuth();
  expect(iotaAuth.iotaClient).toBeDefined();
  iotaAuth.iotaClient.api.getNodeInfo((error, success)=> {console.log(success); done();});
});
