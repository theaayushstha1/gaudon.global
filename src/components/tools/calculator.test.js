import { describe, it, expect } from 'vitest';
import { calculateCoverage } from './CoverageCalculator';

describe('CoverageCalculator Logic', () => {

    it('returns zeroes for empty inputs', () => {
        expect(calculateCoverage(0, 0, 0)).toEqual({ volumeMl: 0, cartridges300: 0, sausages592: 0, cartons300: 0, cartons592: 0 });
        expect(calculateCoverage(null, 10, 10)).toEqual({ volumeMl: 0, cartridges300: 0, sausages592: 0, cartons300: 0, cartons592: 0 });
    });

    it('calculates correct volume for 10x10mm joint x 1m length', () => {
        // 10mm * 10mm * 1m = 100ml raw volume.
        // With 10% waste = 110ml.
        const result = calculateCoverage(10, 10, 1);

        expect(result.volumeMl).toBe(110);
        expect(result.cartridges300).toBe(1); // 110ml fits in 1 cartridge (300ml)
        expect(result.sausages592).toBe(1);   // 110ml fits in 1 sausage (592ml)
    });

    it('calculates correct volume for larger project', () => {
        // 20mm * 10mm * 10m = 2000ml raw volume.
        // With 10% waste = 2200ml.
        const result = calculateCoverage(20, 10, 10);

        expect(result.volumeMl).toBe(2200);

        // 2200 / 300 = 7.33 -> 8 cartridges
        expect(result.cartridges300).toBe(8);

        // 2200 / 592 = 3.71 -> 4 sausages
        expect(result.sausages592).toBe(4);
    });
});
