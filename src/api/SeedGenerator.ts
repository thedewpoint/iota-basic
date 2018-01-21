/**
 * Interface describing the implementation of a SeedGenerator
 */
export interface ISeedGenerator {
  generateSeed(): Promise<string>;
}
