// Шаблон валидации
const checkMinLengthInput = (string, minLength) => {
  return string.length > minLength ? true : false;
};

const checkMaxLengthInput = (string, maxLength) => {
  return string.length < maxLength ? true : false;
};

// Проверяет все ли символы латинские или кириллические
const checkInputСorrect = (string) => {
  const stringRegex = /^[a-z]+\s?[a-z]+$/gi;
  const stringRegexRus = /^[-а-яё]+\s?[а-яё]+$/gi;
  return (stringRegex.test(string) || stringRegexRus.test(string));
};

const validateName = ({ string, minLength, maxLength }) => {
  const isValidMinLength = checkMinLengthInput(string, minLength);
  const isValidMaxLength = checkMaxLengthInput(string, maxLength);
  const isValidCorrect = checkInputСorrect(string);

  const result = {
    isValidated: isValidMinLength && isValidCorrect && isValidMaxLength,
    message: null,
    error: null
  };

  if (result.isValidated) {
    result.message = '';
  } else if (!isValidMinLength) {
    result.error = `Длина должна быть больше ${ minLength } символа`;
  } else if (!isValidCorrect) {
    result.error = 'Символы должны быть латинскими или кириллическими';
  } else if (!isValidMaxLength) {
    result.error = `Длина не должна привышать ${ maxLength } символов`;
  }

  return result;
};

export default validateName;
