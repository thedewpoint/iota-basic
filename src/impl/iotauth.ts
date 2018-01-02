import * as iotaSeed from 'iota-seed-generator';
import * as IOTA from 'iota.lib.js';
import * as moment from 'moment';
import { IIotAuth } from '../api/iotauth-api';
export class IotAuth implements IIotAuth {
  public readonly iotaClient: any;
  private receiveSeed: string;
  // private duration: number;
  constructor(
    seed?: string,
    duration: number = 5,
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
    try {
      let message = this.iotaClient.utils.extractJson(
        accountData.transfers[accountData.transfers.length - 1]
      );
      message = JSON.parse(message);
      return message.code === validationCode;
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
  // private async getNewAddress(
  //   seed: string,
  //   options: any = {}
  // ): Promise<string> {
  //   return new Promise<string>(resolve => {
  //     this.iotaClient.api.getNewAddress(
  //       seed,
  //       options,
  //       (empty: any, address: string, transactions: any[]) => {
  //         resolve(address);
  //       }
  //     );
  //   });
  // }

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
