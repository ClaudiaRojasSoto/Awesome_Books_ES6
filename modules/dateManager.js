import { DateTime } from './luxon.js';

const displayDate = (elementId) => {
  const dateElement = document.getElementById(elementId);

  const updateTime = () => {
    const today = DateTime.now();
    const format = today.toLocaleString(DateTime.DATETIME_FULL);

    dateElement.textContent = format;
  };

  updateTime();
  setInterval(updateTime, 1000);
};

export default displayDate;
