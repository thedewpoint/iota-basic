export interface IIota {
    getAddresses(): void;
    sendTransaction(receivingAddress: string, value: number, doPoW?: boolean) : void;
    getBalance(): number;
    getAccountData(): void;
    getTransactions(): void;
}