import * as IOTA from 'iota.lib.js';
import {
  IAccountData,
  IInput,
  IInputs,
  ITransaction,
} from '../api/AccountData';
import { ICurlHash } from '../api/CurlHash';
import { IIotaBasic } from '../api/IotaBasic';
import { ISeedGenerator } from '../api/SeedGenerator';
import CurlFactory from './CurlFactory';
import SeedGeneratorFactory from './SeedGeneratorFactory';

/**
 * implementation of the IIotaBasic interface
 */
export class Iota implements IIotaBasic {
  public readonly ccurlProvider: ICurlHash;
  public readonly seedGenerator: ISeedGenerator;

  private seed: string;
  private iota: any;
  /**
   * init function takes the iotaclient and overrides attachToTangle
   * @constructor
   * @param {string} seed - the seed to initialize with.
   * @param {string} node - the uri for the provider within iota.lib.js client, defaults to 'https://iotanode.us:443'
   * @param {boolean} pow - this parameter assumes you want to do pow locally and if not you can override it to false
   * @param {any} testClient - this parameter is strictly to make writing unit tests against this class easier and is not meant to be used'
   */
  constructor(
    seed: string,
    node: string = 'https://trinity.iota-tangle.io:14265',
    testClient?: any,
    pow: boolean = true
  ) {
    this.seed = seed;
    this.iota = testClient ? testClient : new IOTA({ provider: node });
    this.ccurlProvider = CurlFactory.getCurlHasher();
    this.seedGenerator = SeedGeneratorFactory.getSeedGenerator();
    if (pow) {
      this.ccurlProvider.init(this.iota);
    }
  }

  /**
   * Generate the most recent receive address with no send transactions on it
   *
   */
  public getReceiveAddress(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.iota.api.getNewAddress(
        this.seed,
        {},
        (error: any, address: string) => {
          if (error) {
            reject(error);
          } else {
            resolve(address);
          }
        }
      );
    });
  }
  /**
   * Generate a secure seed using an implementation of SeedGenerator
   *
   */
  public generateSeed(): Promise<string> {
    return this.seedGenerator.generateSeed();
  }
  /**
   * sendTransaction for sending value from your seed to another address or just sending data
   * @param {string} receiveAddress - the address to send to
   * @param {number} value - the amount in iota to send
   * @param {any} data - json object representing any data you want to send with the transaction
   * @param {string} tag - string containing tag for transaction
   */
  public sendTransaction(
    receivingAddress: string,
    value: number,
    data?: any,
    tag: string = ''
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const message = data
        ? this.iota.utils.toTrytes(JSON.stringify(data))
        : '';
      const transaction: ITransaction = {
        address: receivingAddress,
        message,
        tag,
        value,
      };
      const transactions: ITransaction[] = [transaction];
      this.iota.api.sendTransfer(
        this.seed,
        3,
        14,
        transactions,
        (e: any, success: any) => {
          resolve(success);
        }
      );
    });
  }
  /**
   * returns the balance of your seed
   */
  public getBalance(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.iota.api.getInputs(this.seed, {}, (error: any, inputs: IInputs) => {
        if (error) {
          reject(error);
        } else {
          resolve(inputs.totalBalance);
        }
      });
    });
  }
  /**
   * returns the account data in the form of IAccountData from iota.lib.js for your seed
   */
  public getAccountData(): Promise<IAccountData> {
    return new Promise<IAccountData>((resolve, reject) => {
      this.iota.api.getAccountData(
        this.seed,
        {},
        (error: any, accountData: IAccountData) => {
          if (error) {
            reject(error);
          } else {
            resolve(accountData);
          }
        }
      );
    });
  }
  /**
   * generate a checksum for the seed to verify you entered it correctly. shamelessly stolen from official wallet
   */
  public getChecksum(): string {
    return this.iota.utils.addChecksum(this.seed, 3, false).substr(-3);
  }
}
