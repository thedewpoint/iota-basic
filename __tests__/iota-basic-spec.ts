import * as IOTA from 'iota.lib.js';
import { Iota, IIotaBasic } from '../src/index';
import { CurlHash } from '../src/impl/CurlHash';
import { CurlHashWebGl } from '../src/impl/CurlHashWebGl';
import { IAccountData } from '../src/api/AccountData';
import { ICurlHash } from '../src/api/CurlHash';
import * as ccurl from 'ccurl.interface.js';
import * as curl from 'curl.lib.js';

jest.mock('ccurl.interface.js');
jest.mock('curl.lib.js');

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
        'ZYORXWKBB9EBD9EDWTYDUVVGSSJMYDRIWUZOKUGEKUQLZUWKDOWYWDEAFQTCNMXNXBXKJBIIMLEIHMPLZ'
      );
    });
  iotaClient.api.getNewAddress = getNewAddress.bind(iotaClient.api);
  const getInputs = jest
    .fn()
    .mockImplementation(function(seed, options, callback) {
      callback(null, require('./mock-data/inputs-response.json'));
    });
  iotaClient.api.getInputs = getInputs.bind(iotaClient.api);
  const getAccountData = jest
    .fn()
    .mockImplementation(function(seed, options, callback) {
      callback(null, require('./mock-data/account-data-response.json'));
    });
  iotaClient.api.getAccountData = getAccountData.bind(iotaClient.api);
});

afterEach(() => {
  // jest.resetModules();
});
test('should return a receive address', async () => {
  const iota: IIotaBasic = new Iota(testSeed, '', iotaClient);
  let receiveAddress: string = await iota.getReceiveAddress();
  expect(iotaClient.valid.isAddress(receiveAddress)).toBe(true);
});
test('should return the account balance', async () => {
  const iota: IIotaBasic = new Iota(testSeed, '', iotaClient);
  let balance: number = await iota.getBalance();
  expect(balance).toBe(2);
});
test('should return account data correctly', async () => {
  const iota: IIotaBasic = new Iota(testSeed, '', iotaClient);
  let accountData: IAccountData = await iota.getAccountData();
  expect(accountData.balance).toBe(0);
  expect(accountData.latestAddress).toBe(
    'QMGKMQIJMVOYXOTYOJTIFQVLHTWDTKWELBQMIVGHS9HAETZYERBVQWXIQFKI9CYIEZJMUXBRZHKHETTGY'
  );
  expect(accountData.transfers.length).toBe(2);
  expect(accountData.inputs.length).toBe(0);
  expect(accountData.transfers[0][0].hash).toBe(
    'PLMTQUAD9SVHLEEDGMGJUGGZKJXPXGCB9GNYLNVYQEYKZRLDJJNDQFWPRAHNWBXRKJIMRZZCVQTK99999'
  );
});
test('use ccurl implementation when applicable', async () => {
  const iota = new Iota(testSeed, '', iotaClient);
  const ccurlProvider: ICurlHash = iota.ccurlProvider;
  expect(ccurlProvider instanceof CurlHash).toBe(true);
  expect(ccurlProvider instanceof CurlHashWebGl).toBe(false);
});
test('Should call the localAttach of CurlHash when on node when attachToTangle is called', async () => {
  const iota = new Iota(testSeed, '', iotaClient);
  ccurl.mockImplementationOnce(
    (
      trunkTransaction,
      branchTransaction,
      minWeightMagnitude,
      trytes,
      ccurlPath,
      callback
    ) => {
      callback(require('./mock-data/successresponse.json').data);
    }
  );
  const result = await iota.sendTransaction(
    'ZYORXWKBB9EBD9EDWTYDUVVGSSJMYDRIWUZOKUGEKUQLZUWKDOWYWDEAFQTCNMXNXBXKJBIIMLEIHMPLZ',
    1
  );

  expect(ccurl).toHaveBeenCalled();
});
test('should generate a valid checksum for a seed', async () => {
  const iota = new Iota(testSeed, '', iotaClient);
  let checksum = iota.getChecksum();
  expect(checksum).toBe('ZUA');
});
test('use webgl2 ccurl implementation when applicable', async () => {
  global.document = {};
  global.document.createElement = type => {
    return {
      getContext: type => {
        return true;
      },
    };
  };
  const iota = new Iota(testSeed, '', iotaClient);
  let ccurlProvider: ICurlHash = iota.ccurlProvider;
  expect(ccurlProvider instanceof CurlHash).toBe(false);
  expect(ccurlProvider instanceof CurlHashWebGl).toBe(true);
});

test('Should call the localAttach of CurlHashWebGl when on node when attachToTangle is called', async () => {
  global.document = {};
  global.document.createElement = type => {
    return {
      getContext: type => {
        return true;
      },
    };
  };
  const iota = new Iota(testSeed, '', iotaClient);
  const spy = spyOn(curl, 'pow');
  spy.and.callFake(() => {
    return new Promise((resolve, reject) => {
      resolve('9XA9999999CJK99999999999999');
    });
  });
  const result = await iota.sendTransaction(
    'ZYORXWKBB9EBD9EDWTYDUVVGSSJMYDRIWUZOKUGEKUQLZUWKDOWYWDEAFQTCNMXNXBXKJBIIMLEIHMPLZ',
    1
  );
  expect(spy).toHaveBeenCalled;
});
