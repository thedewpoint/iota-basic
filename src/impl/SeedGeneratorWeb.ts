import { ISeedGenerator } from '../api/SeedGenerator';
// logic shamelessly stolen/inspired from https://stackoverflow.com/a/18121681/2162857
export class SeedGeneratorWeb implements ISeedGenerator {
  private validChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ9';
  private seedLength: number = 81;
  public generateSeed(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let i;
      let result = '';
      const values = new Uint32Array(this.seedLength);
      window.crypto.getRandomValues(values);
      for (i = 0; i < this.seedLength; i++) {
        result += this.validChars[values[i] % this.validChars.length];
      }
      resolve(result);
    });
  }
}
