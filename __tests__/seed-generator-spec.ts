import * as IOTA from 'iota.lib.js';
import { SeedGeneratorNode } from '../src/impl/SeedGeneratorNode';
import { SeedGeneratorWeb } from '../src/impl/SeedGeneratorWeb';
const iota = new IOTA();

test('should return a valid seed from node', async () => {
  const seedGenerator = new SeedGeneratorNode();
  let seed = await seedGenerator.generateSeed();
  expect(iota.valid.isAddress(seed)).toBe(true);
});
test('should return a valid seed from browser', async () => {
  global.window = {};
  global.window.crypto = {};
  global.window.crypto.getRandomValues = array => {
    const mockData = require('./mock-data/randomweb.json').values.split(',');
    for (let i = 0; i < mockData.length; i++) {
      mockData[i] = parseInt(mockData[i]);
    }
    array = Uint32Array.from(mockData);
  };
  const seedGenerator = new SeedGeneratorWeb();
  let seed = await seedGenerator.generateSeed();
  expect(iota.valid.isAddress(seed)).toBe(true);
});
