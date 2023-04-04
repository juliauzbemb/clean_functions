import getHeroHealth from '../cleanfunc';

test.each([
  [{ name: 'Mar', health: 30 }, 'wounded'],
  [{ name: 'Mar', health: 14 }, 'critical'],
  [{ name: 'Mar', health: 60 }, 'healthy'],
  [{ name: 'Mar', health: 0 }, 'dead'],
  [{ name: 'Mar', health: 'some string' }, null],
  [{ name: undefined, health: 40 }, null],
  [{ name: 'Mar', health: undefined }, null],
  [{ name: 'Mar', health: -10 }, 'dead'],
  [{ name: 'Mar', health: 1000000000000 }, 'healthy'],
  [{ name: '', health: 10 }, null],
  [{ name: 'Mar', health: '50' }, null],
])(
  ('should get health status for object %o'),
  (heroObject, expected) => {
    const result = getHeroHealth(heroObject);
    expect(result).toBe(expected);
  },
);
