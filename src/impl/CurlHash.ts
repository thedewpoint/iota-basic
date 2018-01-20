import * as ccurl from 'ccurl.interface.js';
import * as path from 'path';
import { ICurlHash } from '../api/CurlHash';

export class CurlHash implements ICurlHash {
  public init(iota: any): void {
    iota.api.attachToTangle = this.localAttachToTangle;
    iota.api.__proto__.attachToTangle = this.localAttachToTangle;
  }

  private localAttachToTangle(
    trunkTransaction: any,
    branchTransaction: any,
    minWeightMagnitude: number,
    trytes: any,
    callback: any
  ): void {
    const ccurlPath: string = path.join(
      __dirname,
      '..',
      '..',
      'binaries',
      'mac'
    );
    ccurl(
      trunkTransaction,
      branchTransaction,
      minWeightMagnitude,
      trytes,
      ccurlPath,
      (error: any, success: any) => {
        console.log("success",success);
        if (callback) {
          return callback(error, success);
        } else {
          return success;
        }
      }
    );
  }
}
