/**
 * Represents AccountData object returned by iota.lib.js getAccountData.
 */
export interface IAccountData {
  latestAddress: string;
  addresses?: string[] | null;
  transfers?: ITransfer[] | null;
  inputs?: IInput[] | null;
  balance: number;
}
/**
 * Represents Transfers object returned by iota.lib.js transfers.
 */
export interface ITransfer {
  hash: string;
  signatureMessageFragment: string;
  address: string;
  value: number;
  obsoleteTag: string;
  timestamp: number;
  currentIndex: number;
  lastIndex: number;
  bundle: string;
  trunkTransaction: string;
  branchTransaction: string;
  tag: string;
  attachmentTimestamp: number;
  attachmentTimestampLowerBound: number;
  attachmentTimestampUpperBound: number;
  nonce: string;
  persistence: boolean;
}
/**
 * Represents Inputs wrapper object returned by iota.lib.js getInputs.
 */
export interface IInputs {
  inputs?: IInput[] | null;
  totalBalance: number;
}

/**
 * Represents Input object returned by iota.lib.js getInputs.
 */
export interface IInput {
  address: string;
  balance: number;
  keyIndex: number;
  security: number;
}
/**
 * Represents transaction object passed to attachToTangle.
 */
export interface ITransaction {
  address: string;
  value: number;
  message: string;
  tag: string;
}
