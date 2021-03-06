// Шаблон валидации
const checkMinLengthInput = (string) => {
  return string.length >= 8 ? true : false;
};

const checkMaxLengthInput = (string) => {
  return string.length < 128 ? true : false;
};

// Проверяет все ли символы латинские
const checkPasswordСorrect = (password) => {
  const passwordRegex = /[A-Za-z]+[@$!%*#?&]*/gi;
  return passwordRegex.test(password);
};

// Проверяет на наличие хотя бы одной цифры
const checkPasswordNumeric = (password) => {
  const passwordRegex = /\d+/;
  return passwordRegex.test(password);
};

const validatePassword = ({ password }) => {
  const isValidMinLength = checkMinLengthInput(password);
  const isValidMaxLength = checkMaxLengthInput(password);
  const isValidCorrect = checkPasswordСorrect(password);
  const isValidCorrectNumeric = checkPasswordNumeric(password);

  const result = {
    isValidated: isValidMinLength && isValidMaxLength && isValidCorrect && isValidCorrectNumeric,
    message: null,
    error: null
  };

  if (result.isValidated) {
    result.message = '';
  } else if (!isValidCorrect) {
    result.error = 'Символы должны быть английского алфавита включая числа';
  } else if (!isValidMinLength) {
    result.error = 'Длина пароля должна быть больше 8 символов';
  } else if (!isValidCorrectNumeric) {
    result.error = 'Пароль должен содержать хотя бы одну цифру';
  } else if (!isValidMaxLength) {
    result.error = 'Длина пароля не должна привышать 128 символов';
  }

  return result;
};

export default validatePassword;
