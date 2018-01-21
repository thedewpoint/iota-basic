import { ISeedGenerator } from '../api/SeedGenerator';

export default class SeedGeneratorFactory {
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
