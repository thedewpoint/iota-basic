import { ICurlHash } from '../api/CurlHash';

/**
 * Factory for returning an implementation of ICurlHash depending on whether the process is running
 * in nodeJS or a browser.
 * @class
 */
export default class CurlFactory {
  /**
   * Static function for returning the instance
   */
  public static getCurlHasher(): ICurlHash {
    if (this.isNode()) {
      const CurlHash = require('./CurlHash').CurlHash;
      return new CurlHash();
    } else {
      const CurlHashWebGl = require('./CurlHashWebGl').CurlHashWebGl;
      return new CurlHashWebGl();
    }
  }
  /**
   * Private method for determining if the process is Node or Browser.
   */
  private static isNode() {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2');
      return gl === null;
    } catch (e) {
      return true;
    }
  }
}
