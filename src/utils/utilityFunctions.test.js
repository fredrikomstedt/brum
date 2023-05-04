import { getPriceFromDistance } from './utilityFunctions';

const distance = 10000; // In meters
const costPerMile = 25;

test('returns 0 if distance is 0', () => {
    const result = getPriceFromDistance(0, costPerMile);
    expect(result).toBe(0);
});

test('returns 0 if costPerMile is 0', () => {
    const result = getPriceFromDistance(distance, 0);
    expect(result).toBe(0);
});

test('returns correct cost', () => {
    const result = getPriceFromDistance(distance, costPerMile);
    expect(result).toBe(costPerMile);
});
