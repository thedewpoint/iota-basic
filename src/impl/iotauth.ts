import IIotAuth from '../api/iotauth-api';

export default class IotAuth implements IIotAuth {
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
