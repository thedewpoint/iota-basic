import * as iotaSeed from 'iota-seed-generator';
import * as IOTA from 'iota.lib.js';
import { IIotAuth } from '../api/iotauth-api';

export class IotAuth implements IIotAuth {
  public readonly iotaClient: any;
  constructor(node: string = 'https://nodes.iota.cafe') {
    this.iotaClient = new IOTA({
      provider: node,
    });
  }
  public async generateValidationCode(): Promise<string>  {
    const seed: string = await iotaSeed();
    return seed.slice(0,6);
  }
  public async generateNewSeed(): Promise<string> {
    const seed: string = await iotaSeed();
    return seed;
  }
  public isTransactionValid(
    userSeed: string,
    receiveAddress: string,
    validationCode: string
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
