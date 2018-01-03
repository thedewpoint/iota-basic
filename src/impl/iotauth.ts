import * as iotaSeed from 'iota-seed-generator';
import * as IOTA from 'iota.lib.js';
import * as moment from 'moment';
import { IIotAuth } from '../api/iotauth-api';
export class IotAuth implements IIotAuth {
  public readonly iotaClient: any;
  private receiveSeed: string;
  private duration: number;
  constructor(
    seed?: string,
    duration: number = Infinity,
    node: string = 'https://nodes.iota.cafe'
  ) {
    this.iotaClient = new IOTA({
      provider: node,
    });
    if (seed) {
      this.receiveSeed = seed;
    }
    this.duration = duration;
  }
  public async isTransactionValid(validationCode: string): Promise<boolean> {
    const receiveSeed = await this.getSeed();
    const accountData: any = await this.getAccountData(receiveSeed);
    const transferObj = accountData.transfers[accountData.transfers.length - 1];
    const transfer = transferObj[0];
    try {
      let code = this.iotaClient.utils.extractJson(transferObj);
      code = JSON.parse(code);
      const isValidAddress = await this.isValidAddress(
        transfer.address,
        accountData.transfers.length - 1
      );
      const isValidTimestamp = this.isValidTimestamp(transfer.timestamp);
      return code.code === validationCode && isValidAddress && isValidTimestamp;
    } catch (e) {
      return false;
    }
  }
  public async getSeed(): Promise<string> {
    if (!this.receiveSeed) {
      this.receiveSeed = await this.generateNewSeed();
    }
    return this.receiveSeed;
  }
  public async generateValidationCode(): Promise<string> {
    const seed: string = await iotaSeed();
    return seed.slice(0, 6);
  }
  private async getNewAddress(
    seed: string,
    options: any = { index: 0, returnAll: true }
  ): Promise<string> {
    return new Promise<string>(resolve => {
      this.iotaClient.api.getNewAddress(
        seed,
        options,
        (empty: any, addresses: string[], transactions: any[]) => {
          if (addresses instanceof Array) {
            resolve(addresses[Math.min(options.index, addresses.length - 1)]);
          } else {
            resolve(addresses);
          }
        }
      );
    });
  }

  private async isValidAddress(
    receiveAddress: string,
    index: number
  ): Promise<boolean> {
    const correctAddress = await this.getNewAddress(this.receiveSeed, {
      index,
      returnAll: true,
    });
    return correctAddress === receiveAddress;
  }
  private isValidTimestamp(timestamp: number): boolean {
    const transactionTime: moment.Moment = moment(timestamp * 1000);
    const now: moment.Moment = moment();
    const diff: number = now.diff(transactionTime, 'minutes');
    return diff <= this.duration;
  }
  private async generateNewSeed(): Promise<string> {
    const seed: string = await iotaSeed();
    return seed;
  }

  private async getAccountData(seed: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.iotaClient.api.getAccountData(
        seed,
        (error: any, accountData: any) => {
          resolve(accountData);
        }
      );
    });
  }
}
