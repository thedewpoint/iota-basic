import * as curl from 'curl.lib.js';
import { ICurlHash } from '../api/CurlHash';

export class CurlHashWebGl implements ICurlHash {
  private MAX_TIMESTAMP_VALUE: number = (Math.pow(3, 27) - 1) / 2;
  private iota: any;
  public init(iota: any): void {
    this.iota = iota;
    iota.api.attachToTangle = this.localAttachToTangle;
    iota.api.__proto__.attachToTangle = this.localAttachToTangle;
  }
  private localAttachToTangle(
    trunkTransactionLocal: any,
    branchTransactionLocal: any,
    minWeightMagnitudeLocal: number,
    trytesLocal: any,
    callbackLocal: any
  ): void {
    const ccurlHashing = (
      trunkTransaction: any,
      branchTransaction: any,
      minWeightMagnitude: number,
      trytes: any,
      callback: any
    ) => {
      const finalBundleTrytes: any[] = [];
      let previousTxHash: any;
      let i = 0;

      const loopTrytes = () => {
        getBundleTrytes(trytes[i], (error: any) => {
          if (error) {
            return callback(error);
          } else {
            i++;
            if (i < trytes.length) {
              loopTrytes();
            } else {
              // reverse the order so that it's ascending from currentIndex
              return callback(null, finalBundleTrytes.reverse());
            }
          }
        });
      };

      const getBundleTrytes = (thisTrytes: any, callbackBudle: any) => {
        // PROCESS LOGIC:
        // Start with last index transaction
        // Assign it the trunk / branch which the user has supplied
        // IF there is a bundle, chain  the bundle transactions via
        // trunkTransaction together

        const txObject = this.iota.utils.transactionObject(thisTrytes);
        txObject.tag = txObject.obsoleteTag;
        txObject.attachmentTimestamp = Date.now();
        txObject.attachmentTimestampLowerBound = 0;
        txObject.attachmentTimestampUpperBound = this.MAX_TIMESTAMP_VALUE;
        // If this is the first transaction, to be processed
        // Make sure that it's the last in the bundle and then
        // assign it the supplied trunk and branch transactions
        if (!previousTxHash) {
          // Check if last transaction in the bundle
          if (txObject.lastIndex !== txObject.currentIndex) {
            return callbackBudle(
              new Error(
                'Wrong bundle order. The bundle should be ordered in descending order from currentIndex'
              )
            );
          }

          txObject.trunkTransaction = trunkTransaction;
          txObject.branchTransaction = branchTransaction;
        } else {
          // Chain the bundle together via the trunkTransaction (previous tx in the bundle)
          // Assign the supplied trunkTransaciton as branchTransaction
          txObject.trunkTransaction = previousTxHash;
          txObject.branchTransaction = trunkTransaction;
        }

        const newTrytes = this.iota.utils.transactionTrytes(txObject);

        curl
          .pow({ trytes: newTrytes, minWeight: minWeightMagnitude })
          .then((nonce: any) => {
            const returnedTrytes = newTrytes.substr(0, 2673 - 81).concat(nonce);
            const newTxObject = this.iota.utils.transactionObject(
              returnedTrytes
            );

            // Assign the previousTxHash to this tx
            const txHash = newTxObject.hash;
            previousTxHash = txHash;

            finalBundleTrytes.push(returnedTrytes);
            callbackBudle(null);
          })
          .catch(callbackBudle);
      };
      loopTrytes();
    };

    ccurlHashing(
      trunkTransactionLocal,
      branchTransactionLocal,
      minWeightMagnitudeLocal,
      trytesLocal,
      (error: any, success: any) => {
        if (callbackLocal) {
          return callbackLocal(error, success);
        } else {
          return success;
        }
      }
    );
  }
}
