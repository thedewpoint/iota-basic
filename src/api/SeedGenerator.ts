export interface ISeedGenerator {
  generateSeed(): Promise<string>;
}
