const convertMinutes = duration => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  const time = `
    ${hours === 0 ? '' : hours + 'ч'}
    ${minutes === 0 ? '00' : minutes}м
  `;
  return time;
};

export default convertMinutes;
