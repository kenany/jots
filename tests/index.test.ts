import { jots } from 'jots';
import { describe, expect, it } from 'vitest';

describe('jots', () => {
  it('is a function', () => {
    expect(typeof jots).toBe('function');
  });

  it.each([
    ['bread', 5],
    ['ardeb', 5],
    ['barde', 5],
    ['bared', 5],
    ['beard', 5],
    ['debar', 5],
    ['boils', 1],
    ['biros', 2],
    ['parts', 2],
    ['align', 1],
    ['tying', 0],
  ] as const)('jots("bread", "%s") returns %i', (guess, expected) => {
    expect(jots('bread', guess)).toBe(expected);
  });
});
