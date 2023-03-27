export const isValidInput = (input) => {
  if (input.trim() === '') return false;
  const regex = /^[a-zA-Z0-9\s(),.\\-]+$/;
  return regex.test(input);
};

export const displayLiveDate = () => {
  const liveDateElement = document.querySelector('.live-date');
  const now = DateTime.local();
  const formattedDate = now.toLocaleString(DateTime.DATETIME_MED);
  liveDateElement.textContent = formattedDate;
};
