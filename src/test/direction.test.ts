import { describe, it, expect } from 'vitest';
import { guardOpposite } from '../game/direction';

describe('direction helpers', () => {
  it('blocks opposite turns', () => {
    expect(guardOpposite('Up', 'Down')).toBe('Up');
    expect(guardOpposite('Left', 'Right')).toBe('Left');
    expect(guardOpposite('Up', 'Right')).toBe('Right');
  });
});
