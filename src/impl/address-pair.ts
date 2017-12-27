import AddressPairApi from "../api/address-pair-api";

export default class AddressPair implements AddressPairApi 
{
    readonly publicKey: string;
    readonly privateKey: string;
    constructor (publicKey: string, privateKey: string) {
        this.publicKey = publicKey;
        this.privateKey = privateKey;
    }

}