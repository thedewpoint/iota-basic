import { IAccountData, ITransfer } from './AccountData';

export interface IIota {
  getReceiveAddress(): Promise<string>;
  sendTransaction(receivingAddress: string, value: number, pow?: boolean): Promise<any>;
  getBalance(): Promise<number>;
  getAccountData(): Promise<IAccountData>;
}
