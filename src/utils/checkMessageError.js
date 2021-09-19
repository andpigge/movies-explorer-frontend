// Принимает сообщение, и куда его записать
const checkMessageError = (message, setMessageError, defaultMessage) => {
  // В случае если на сервере нет такой ошибке
  if (!message) {
    setMessageError(defaultMessage);
  }
  message.then(message => {
    setMessageError(message.message);
  });
};

export default checkMessageError;
