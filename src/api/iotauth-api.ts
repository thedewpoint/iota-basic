import AddressPairApi from './address-pair-api';

export default interface IIotAuth {
  generateValidationCode(): string;
  generateNewSeed(): string;
  isTransactionValid(
    userSeed: string,
    receiveAddress: string,
    validationCode: string
  ): boolean;
};
