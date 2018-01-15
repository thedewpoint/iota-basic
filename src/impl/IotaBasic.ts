import { IAccountData } from '../api/AccountData';
import { IIota } from '../api/IotaBasic';

export class Iota implements IIota {
  private seed: string;
  constructor(seed: string) {
    this.seed = seed;
  }
  public getReceiveAddress(): string {
    throw new Error('Method not implemented.');
  }
  public sendTransaction(
    receivingAddress: string,
    value: number,
    pow?: boolean | undefined
  ): void {
    throw new Error('Method not implemented.');
  }
  public getBalance(): number {
    throw new Error('Method not implemented.');
  }
  public getAccountData(): IAccountData {
    throw new Error('Method not implemented.');
  }
}
