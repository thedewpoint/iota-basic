import {AccountData} from "../api/AccountData";
import { IIota } from "../api/IotaBasic";

export class Iota implements IIota {
    private seed: string;
    constructor(seed: string) {
        this.seed = seed;
    }
    getReceiveAddress(): string {
        throw new Error("Method not implemented.");
    }
    sendTransaction(receivingAddress: string, value: number, pow?: boolean | undefined): void {
        throw new Error("Method not implemented.");
    }
    getBalance(): number {
        throw new Error("Method not implemented.");
    }
    getAccountData(): AccountData {
        throw new Error("Method not implemented.");
    }
    
}