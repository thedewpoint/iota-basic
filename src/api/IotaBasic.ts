import { IAccountData, ITransfer } from './AccountData';

export interface IIota {
  getReceiveAddress(): string;
  sendTransaction(receivingAddress: string, value: number, pow?: boolean): void;
  getBalance(): number;
  getAccountData(): IAccountData;
}
