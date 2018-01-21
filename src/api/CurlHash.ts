/**
 * Interface describing the implementation a curlhasher must have.
 *
 */
export interface ICurlHash {
  /**
   * this function
   * @param {any} iota - The iota.lib.js client.
   */
  init(iota: any): void;
}
