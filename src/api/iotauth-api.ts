import { IAddressPair } from './address-pair-api';

export interface IIotAuth {
  generateValidationCode(): Promise<string> ;
  generateNewSeed(): Promise<string>;
  isTransactionValid(
    userSeed: string,
    receiveAddress: string,
    validationCode: string
  ): Promise<boolean>;
}
