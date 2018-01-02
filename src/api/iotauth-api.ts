export interface IIotAuth {
  generateValidationCode(): Promise<string>;
  getSeed(): Promise<string>;
  isTransactionValid(
    validationCode: string
  ): Promise<boolean>;
}
