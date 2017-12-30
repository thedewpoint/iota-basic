import * as iotaSeed from 'iota-seed-generator';
import * as IOTA from 'iota.lib.js';
import { IIotAuth } from '../api/iotauth-api';
export class IotAuth implements IIotAuth {
  public readonly iotaClient: any;
  private receiveAddress: string;
  private receiveSeed: string;
  constructor(node: string = 'https://nodes.iota.cafe', seed?: string) {
    this.iotaClient = new IOTA({
      provider: node,
    });
    if (seed) {
      this.receiveSeed = seed;
    }
  }
  public async getReceiveAddress(): Promise<string> {
    if (!this.receiveSeed) {
      this.receiveSeed = await this.generateNewSeed();
    }
    if(!this.receiveAddress) {
      this.receiveAddress = await this.getNewAddress(this.receiveSeed);
    }
    return this.receiveAddress;
  }

  private async getNewAddress(seed : string, options: any = {}) : Promise<string> {
    return new Promise<string>( resolve => {
      this.iotaClient.api.getNewAddress(
        seed,
        options,
        (empty: any, address: string, transactions: Array<any>) => {
          resolve(address);
        }
      );
    });
  }
  public async generateValidationCode(): Promise<string> {
    const seed: string = await iotaSeed();
    return seed.slice(0, 6);
  }
  public async generateNewSeed(): Promise<string> {
    const seed: string = await iotaSeed();
    return seed;
  }
  public isTransactionValid(
    userSeed: string,
    validationCode: string
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
