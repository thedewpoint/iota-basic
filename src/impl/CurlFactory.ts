import { ICurlHash } from '../api/CurlHash';

const isNode = typeof window === 'undefined';

export default class CurlFactory {
  public static getCurlHasher(): ICurlHash {
    if (isNode) {
      return require('./CurlHash');
    } else {
      return require('./CurlHashWebGl');
    }
  }
}
