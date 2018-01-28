import { IAccountData, ITransfer } from './AccountData';

/**
 * Interface describing the basic methods exposed by any implementation of IotaBasic API
 */
export interface IIotaBasic {
  getReceiveAddress(): Promise<string>;
  // generateSeed(): Promise<string>;
  sendTransaction(
    receivingAddress: string,
    value: number,
    data?: any
  ): Promise<any>;
  getChecksum(): string;
  getBalance(): Promise<number>;
  getAccountData(): Promise<IAccountData>;
}
