import * as ccurl from 'ccurl.interface.js';
import * as os from 'os';
import * as path from 'path';
import { ICurlHash } from '../api/CurlHash';

/**
 * CurlHash leverages the CCurl binary and ccurl.interface.js to do pow
 * this implementation only works on Node since it is dependent on the provided
 * binaries
 * @class
 */
export class CurlHash implements ICurlHash {
  /**
   * init function takes the iotaclient and overrides attachToTangle
   * @param {any} iota - The iota.lib.js client for overriding attachToTangle to do pow locally.
   */
  public init(iota: any): void {
    iota.api.attachToTangle = this.localAttachToTangle;
    iota.api.__proto__.attachToTangle = this.localAttachToTangle;
  }
  /**
   * localAttachToTangle function code shamelessly stolen from the official ledger wallet.
   * This function is private and not available to be called publicly
   */
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
        return callback(error, success);
      }
    );
  }
}
