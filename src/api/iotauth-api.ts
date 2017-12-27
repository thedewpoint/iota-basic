import AddressPairApi from "./address-pair-api";

export default interface IotAuthApi {
    generateValidationCode(): string;
    generateNewSeed(): string;
    generateNewAddress(seed:string): AddressPairApi;
}