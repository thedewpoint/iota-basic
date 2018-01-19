import * as IOTA from 'iota.lib.js';
import {
  IAccountData,
  IInput,
  IInputs,
  ITransaction,
} from '../api/AccountData';
import { ICurlHash } from '../api/CurlHash';
import { IIotaBasic } from '../api/IotaBasic';
import CurlFactory from './CurlFactory';

export class Iota implements IIotaBasic {
  public readonly ccurlProvider: ICurlHash;
  private seed: string;
  private iota: any;
  constructor(
    seed: string,
    node: string = 'https://iotanode.us:443',
    testClient?: any
  ) {
    this.seed = seed;
    this.iota = testClient ? testClient : new IOTA({ provider: node });
    this.ccurlProvider = CurlFactory.getCurlHasher();
    this.ccurlProvider.init(this.iota);
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
    pow: boolean = true,
    data?: any
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const message = data
        ? this.iota.utils.toTrytes(JSON.stringify(data))
        : '';
      const transaction: ITransaction = {
        address: receivingAddress,
        message,
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
  public getChecksum(): string {
    return this.iota.utils.addChecksum(this.seed, 3, false).substr(-3);
  }
}
