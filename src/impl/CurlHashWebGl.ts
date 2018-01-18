import { ICurlHash } from '../api/CurlHash';
var curl = require('curl.lib.js');

export default class CurlHashWebGl implements ICurlHash {
  private MAX_TIMESTAMP_VALUE: number = (Math.pow(3,27) - 1) / 2;
  private iota: any;
  public init(iota: any): void {
    this.iota = iota;
    iota.api.attachToTangle = this.localAttachToTangle;
    iota.api.__proto__.attachToTangle = this.localAttachToTangle;
  }
 private localAttachToTangle (trunkTransaction: any, branchTransaction: any, minWeightMagnitude: number, trytes: any, callback: any) :void {
  const that = this;  
  const ccurlHashing = function(trunkTransaction: any, branchTransaction:any , minWeightMagnitude: number, trytes: any, callback:any) {
        var finalBundleTrytes: any[] = [];
        var previousTxHash: any;
        var i = 0;

        function loopTrytes() {
            getBundleTrytes(trytes[i], function(error: any) {
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
        }

        function getBundleTrytes(thisTrytes: any, callback: any) {
            // PROCESS LOGIC:
            // Start with last index transaction
            // Assign it the trunk / branch which the user has supplied
            // IF there is a bundle, chain  the bundle transactions via
            // trunkTransaction together

            var txObject = that.iota.utils.transactionObject(thisTrytes);
            txObject.tag = txObject.obsoleteTag;
            txObject.attachmentTimestamp = Date.now();
            txObject.attachmentTimestampLowerBound = 0;
            txObject.attachmentTimestampUpperBound = that.MAX_TIMESTAMP_VALUE;
            // If this is the first transaction, to be processed
            // Make sure that it's the last in the bundle and then
            // assign it the supplied trunk and branch transactions
            if (!previousTxHash) {
                // Check if last transaction in the bundle
                if (txObject.lastIndex !== txObject.currentIndex) {
                    return callback(new Error("Wrong bundle order. The bundle should be ordered in descending order from currentIndex"));
                }

                txObject.trunkTransaction = trunkTransaction;
                txObject.branchTransaction = branchTransaction;
            } else {
                // Chain the bundle together via the trunkTransaction (previous tx in the bundle)
                // Assign the supplied trunkTransaciton as branchTransaction
                txObject.trunkTransaction = previousTxHash;
                txObject.branchTransaction = trunkTransaction;
            }

            var newTrytes = that.iota.utils.transactionTrytes(txObject);

            curl.pow({trytes: newTrytes, minWeight: minWeightMagnitude}).then((nonce: any)=> {
                var returnedTrytes = newTrytes.substr(0, 2673-81).concat(nonce);
                var newTxObject= that.iota.utils.transactionObject(returnedTrytes);

                // Assign the previousTxHash to this tx
                var txHash = newTxObject.hash;
                previousTxHash = txHash;

                finalBundleTrytes.push(returnedTrytes);
                callback(null);
            }).catch(callback);
        }
        loopTrytes()
    }

    ccurlHashing(trunkTransaction, branchTransaction, minWeightMagnitude, trytes, (error:any, success:any) =>{
        if (error) {
            console.log(error);
        } else {
            console.log(success);
        }
        if (callback) {
            return callback(error, success);
        } else {
            return success;
        }
    })
}
}
