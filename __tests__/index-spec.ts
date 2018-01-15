import { Iota, IIota } from '../src/index';
test('iotabasic should be available', () => {
  let iota: IIota = new Iota("");
  expect(iota).toBeDefined();
});
