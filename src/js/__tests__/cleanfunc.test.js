import getHeroHealth from '../cleanfunc';

test.each([
  [{ name: 'Mar', health: 30 }, 'wounded'],
  [{ name: 'Mar', health: 14 }, 'critical'],
  [{ name: 'Mar', health: 15 }, 'wounded'],
  [{ name: 'Mar', health: 50 }, 'wounded'],
  [{ name: 'Mar', health: 60 }, 'healthy'],
  [{ name: 'Mar', health: 0 }, 'critical'],
  [{ name: 'Mar', health: 1000000000000 }, 'healthy'],
])(
  ('should get health status for object %o'),
  (heroObject, expected) => {
    const result = getHeroHealth(heroObject);
    expect(result).toBe(expected);
  },
);
