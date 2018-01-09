import { IotAuth } from '../src/index';
import { IIotAuth } from '../src/index';
test('iotauth should be available', () => {
  let iotAuth: IIotAuth = new IotAuth();
  expect(iotAuth).toBeDefined();
});
