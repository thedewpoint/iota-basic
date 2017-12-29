import IAddressPair from '../api/address-pair-api';

export default class AddressPair implements IAddressPair {
  public readonly publicKey: string;
  public readonly privateKey: string;
  constructor(publicKey: string, privateKey: string) {
    this.publicKey = publicKey;
    this.privateKey = privateKey;
  }
}
