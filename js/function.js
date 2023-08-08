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

// Функция для проверки встречи в рабочее время
const getMinsFromTime = function (timeString) {
  const [hours, minutes] = timeString.split(':');
  return hours * 60 + Number(minutes);
};

const checkMeetingTime = function (workStart, workEnd, meetingStart, meetingDuration) {
  const workStartInMins = getMinsFromTime(workStart);
  const workEndInMins = getMinsFromTime(workEnd);
  const meetingStartInMins = getMinsFromTime(meetingStart);

  console.log(meetingStartInMins >= workStartInMins && meetingStartInMins + meetingDuration <= workEndInMins);
};
checkMeetingTime('08:00', '18:00', '14:00', 90);
