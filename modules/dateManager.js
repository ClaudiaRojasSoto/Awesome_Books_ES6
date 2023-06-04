import { DateTime } from 'https://cdn.jsdelivr.net/npm/luxon@2.0.2/build/es6/luxon.min.js';

const displayDate = (elementId) => {
  const dateElement = document.getElementById(elementId);

  const updateTime = () => {
    const today = DateTime.now();
    const format = today.toLocaleString(DateTime.DATETIME_FULL);

    dateElement.textContent = format;
  };

  updateTime();
  setInterval(updateTime, 1000);
}

export default displayDate;

