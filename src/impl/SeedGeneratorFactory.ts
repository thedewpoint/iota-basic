import { ISeedGenerator } from '../api/SeedGenerator';
/**
 * Factory for returning an implementation of ISeedGenerator depending on whether the process is running
 * in nodeJS or a browser.
 * @class
 */
export default class SeedGeneratorFactory {
  /**
   * Static function for returning the instance
   */
  public static getSeedGenerator(): ISeedGenerator {
    if (this.isNode()) {
      const SeedGeneratorNode = require('./SeedGeneratorNode')
        .SeedGeneratorNode;
      return new SeedGeneratorNode();
    } else {
      const SeedGeneratorWeb = require('./SeedGeneratorWeb').SeedGeneratorWeb;
      return new SeedGeneratorWeb();
    }
  }
  /**
   * Private method for determining if the process is Node or Browser.
   */
  private static isNode() {
    try {
      const values = new Uint32Array(81);
      window.crypto.getRandomValues(values);
      return false;
    } catch (e) {
      return true;
    }
  }
}
