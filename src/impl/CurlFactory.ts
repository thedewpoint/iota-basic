import { ICurlHash } from '../api/CurlHash';

const isNode = typeof window === 'undefined';

export default class CurlFactory {
  public static getCurlHasher(): ICurlHash {
    if (isNode) {
      const CurlHash = require('./CurlHash').CurlHash;
      return new CurlHash();
    } else {
      const CurlHashWebGl = require('./CurlHashWebGl').CurlHashWebGl;
      return new CurlHashWebGl();
    }
  }
}
