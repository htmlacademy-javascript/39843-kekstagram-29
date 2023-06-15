// Сравнение строки с числом
const compareLength = (string, number) => string.length <= number;

compareLength('пять', 2); // false
compareLength('пять', 4); // true
compareLength('пять', 6); // true

// Сравнение строки, палиндром или нет
const isPalindrom = (rawString) => {
  const string = rawString.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
};

isPalindrom('Лёша на полке клопа нашёл'); //true
isPalindrom('ДовОд'); //true
isPalindrom('Кекс'); //false
