export interface IIotAuth {
  generateValidationCode(): Promise<string>;
  generateNewSeed(): Promise<string>;
  getReceiveAddress(): Promise<string>;
  isTransactionValid(
    userSeed: string,
    validationCode: string
  ): Promise<boolean>;
}
