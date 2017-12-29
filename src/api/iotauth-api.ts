import { IAddressPair } from './address-pair-api';

export interface IIotAuth {
  generateValidationCode(): string;
  generateNewSeed(): string;
  isTransactionValid(
    userSeed: string,
    receiveAddress: string,
    validationCode: string
  ): boolean;
}
