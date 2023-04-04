export default function getHeroHealth(object) {
  let result = null;

  if (object.name === undefined || object.name === '' || object.health === undefined || typeof object.health === 'string') {
    return null;
  }

  if (object.health > 50) {
    result = 'healthy';
  } else if (object.health >= 15 && object.health <= 50) {
    result = 'wounded';
  } else if (object.health < 15 && object.health > 0) {
    result = 'critical';
  } else {
    result = 'dead';
  }

  return result;
}
