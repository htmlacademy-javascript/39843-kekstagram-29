import {getOrigId, getRandomArrayElement, getRandomInteger} from './util.js';

const CARD_ID = 25,
  CARD_URL = 25,
  AVATAR_ID = 6,
  MIN_COUNT = 0,
  MAX_COUNT = 1,
  LIKE_MIN_COUNT = 15,
  LIKE_MAX_COUNT = 200,
  CARD_COMMENT_ID = 30,
  CARD_COMMENT_COUNT = 300;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const generatePhotoId = getOrigId(MAX_COUNT, CARD_ID);
const generateCommentId = getOrigId(MAX_COUNT, CARD_COMMENT_COUNT);

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(MAX_COUNT, AVATAR_ID)}.svg`,
  message: `${getRandomArrayElement(MESSAGES)}`,
  name: `${getRandomArrayElement(NAMES)}`
});


const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${getRandomInteger(MAX_COUNT, CARD_URL)}.jpg`,
  description: 'Test',
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from({length: getRandomInteger(MIN_COUNT, CARD_COMMENT_ID)}, createComment)
});

const similarPhotos = () => Array.from({length: CARD_ID}, createPhoto);

export {similarPhotos};
