import * as IOTA from 'iota.lib.js';
import { IAccountData, IInput, IInputs } from '../api/AccountData';
import { ICurlHash } from '../api/CurlHash';
import { IIota } from '../api/IotaBasic';
import CurlFactory from './CurlFactory';

export class Iota implements IIota {
  private seed: string;
  private iota: any;
  constructor(
    seed: string,
    node: string = 'https://iotanode.us:443',
    testClient?: any
  ) {
    this.seed = seed;
    this.iota = testClient ? testClient : new IOTA({ provider: node });
    const ccurlProvider: ICurlHash = CurlFactory.getCurlHasher();
    ccurlProvider.init(this.iota);
  }
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
  public sendTransaction(
    receivingAddress: string,
    value: number,
    pow?: boolean | undefined
  ): Promise<any> {
    throw new Error('Method not implemented.');
  }
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
}
