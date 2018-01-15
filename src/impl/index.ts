import * as IOTA from 'iota.lib.js';
import {IIota} from '../api/iota-basic'

export class Iota implements IIota {
    getAddresses(): void {
        throw new Error("Method not implemented.");
    }
    sendTransaction(receivingAddress: string, value: number, doPoW?: boolean | undefined): void {
        throw new Error("Method not implemented.");
    }
    getBalance(): number {
        throw new Error("Method not implemented.");
    }
    getAccountData(): void {
        throw new Error("Method not implemented.");
    }
    getTransactions(): void {
        throw new Error("Method not implemented.");
    }

}