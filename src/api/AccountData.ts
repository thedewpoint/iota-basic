export interface AccountData {
  latestAddress: string;
  addresses?: (string)[] | null;
  transfers?: ((Transfer)[] | null)[] | null;
  inputs?: (null)[] | null;
  balance: number;
}
export interface Transfer {
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
export interface Inputs {
  inputs?: (Input)[] | null;
  totalBalance: number;
}
export interface Input {
  address: string;
  balance: number;
  keyIndex: number;
  security: number;
}
