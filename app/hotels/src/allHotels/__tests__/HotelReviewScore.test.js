// @flow

import { HotelReviewScore } from '../HotelReviewScore';

const HRS = new HotelReviewScore({ hotel: { review: undefined } });

describe('formatScore', () => {
  it('returns correctly formatted score', () => {
    expect(HRS.formatScore(1)).toBe('1.0');
    expect(HRS.formatScore(1.0)).toBe('1.0');
    expect(HRS.formatScore(1.2)).toBe('1.2');
    expect(HRS.formatScore(1.25)).toBe('1.3');
  });
});

describe('calculateColor', () => {
  it('returns correct score color', () => {
    const RED = '#f44336';
    const ORANGE = '#ff9800';
    const GREEN = '#4caf50';

    expect(HRS.calculateColor(-1)).toBeUndefined();
    expect(HRS.calculateColor(0)).toBe(RED);
    expect(HRS.calculateColor(3)).toBe(ORANGE);
    expect(HRS.calculateColor(7)).toBe(ORANGE);
    expect(HRS.calculateColor(10)).toBe(GREEN);
    expect(HRS.calculateColor(11)).toBeUndefined();
  });
});