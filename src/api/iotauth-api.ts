import AddressPairApi from "./address-pair-api";

export default interface IotAuthApi {
    generateValidationCode(): string;
    generateNewSeed(): string;
    isTransactionValid(userSeed: string, receiveAddress: string, validationCode: string): boolean
}