import * as IOTA from 'iota.lib.js';
import { IIotAuth } from '../api/iotauth-api';

export class IotAuth implements IIotAuth {
  public readonly iotaClient: any;
  constructor(node: string = 'https://nodes.iota.cafe') {
    this.iotaClient = new IOTA({
      provider: node,
    });
  }
  public generateValidationCode(): string {
    throw new Error('Method not implemented.');
  }
  public generateNewSeed(): string {
    throw new Error('Method not implemented.');
  }
  public isTransactionValid(
    userSeed: string,
    receiveAddress: string,
    validationCode: string
  ): boolean {
    throw new Error('Method not implemented.');
  }
}
