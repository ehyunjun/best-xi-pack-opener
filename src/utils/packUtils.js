import { countries } from '../data/countries.js';
import { getRandomItem } from './random.js';

export function createPack(countryId, type = 'country') {
  return {
    id: crypto.randomUUID(),
    countryId,
    type,
    isOpened: false,
    acquiredAt: new Date().toISOString(),
  };
}

export function createRandomPack() {
  const country = getRandomItem(countries);

  return createPack(country.id, 'country');
}

export function createInitialPacks(count = 10) {
  return Array.from({ length: count }, () => createRandomPack());
}
