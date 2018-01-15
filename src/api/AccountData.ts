export interface IAccountData {
  latestAddress: string;
  addresses?: string[] | null;
  transfers?: ITransfer[] | null;
  inputs?: IInput[] | null;
  balance: number;
}
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
export interface IInputs {
  inputs?: IInput[] | null;
  totalBalance: number;
}
export interface IInput {
  address: string;
  balance: number;
  keyIndex: number;
  security: number;
}
