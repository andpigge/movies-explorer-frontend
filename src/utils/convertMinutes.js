const convertMinutes = duration => {
  const hours = duration / 60;
  const minutes = duration % 60;
  const time = `${Math.floor(hours)}ч ${minutes === 0 ? '00' : minutes}м`;
  return time;
};

export default convertMinutes;
