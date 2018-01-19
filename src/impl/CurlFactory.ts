import { ICurlHash } from '../api/CurlHash';

export default class CurlFactory {
  public static getCurlHasher(): ICurlHash {
    if (this.isNode()) {
      const CurlHash = require('./CurlHash').CurlHash;
      return new CurlHash();
    } else {
      const CurlHashWebGl = require('./CurlHashWebGl').CurlHashWebGl;
      return new CurlHashWebGl();
    }
  }
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
