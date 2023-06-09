const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getOrigId = (min, max, cache = []) => () => {
  let id = getRandomInteger(min, max);
  if (cache.length >= (max - min + 1)) {
    return null;
  }
  while (cache.includes(id)) {
    id = getRandomInteger(min, max);
  }
  cache.push(id);
  return id;
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getOrigId, getRandomArrayElement, getRandomInteger};
