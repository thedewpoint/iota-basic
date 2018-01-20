import * as IOTA from 'iota.lib.js';
import { SeedGeneratorNode } from '../src/impl/SeedGeneratorNode';
const iota = new IOTA();

test('should return a valid seed from node', async () => {
  const seedGenerator = new SeedGeneratorNode();
  let seed = await seedGenerator.generateSeed();
  expect(iota.valid.isAddress(seed)).toBe(true);
});
