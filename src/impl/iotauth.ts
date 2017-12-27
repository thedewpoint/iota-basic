import IotAuthApi from "../api/iotauth-api";

export default class IotAuth implements IotAuthApi {
    generateValidationCode(): string {
        throw new Error("Method not implemented.");
    }
    generateNewSeed(): string {
        throw new Error("Method not implemented.");
    }
    isTransactionValid(userSeed: string, receiveAddress: string, validationCode: string): boolean {
        throw new Error("Method not implemented.");
    }
    
}