import { getHealthStatus } from './health';

describe('getHealthStatus', () => {
  test('returns "healthy" when health is above 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
  });

  test('returns "wounded" when health is between 15 and 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
  });

  test('returns "critical" when health is below 15', () => {
    expect(getHealthStatus({ name: 'Маг', health: 10 })).toBe('critical');
  });
});
