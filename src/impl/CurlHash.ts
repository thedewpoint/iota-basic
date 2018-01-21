import * as ccurl from 'ccurl.interface.js';
import * as os from 'os';
import * as path from 'path';
import { ICurlHash } from '../api/CurlHash';

// attach logic stolen from iotaledger wallet
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
    const platform = os.platform();
    const ccurlPath: string = path.join(
      __dirname,
      '..',
      '..',
      'binaries',
      platform
    );
    ccurl(
      trunkTransaction,
      branchTransaction,
      minWeightMagnitude,
      trytes,
      ccurlPath,
      (error: any, success: any) => {
        if (callback) {
          return callback(error, success);
        } else {
          return success;
        }
      }
    );
  }
}
