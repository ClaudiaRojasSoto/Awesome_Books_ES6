export function displayDate(elementId) {
  const dateElement = document.getElementById(elementId);

  const updateTime = () => {
    const today = luxon.DateTime.now();
    const format = today.toLocaleString(luxon.DateTime.DATETIME_FULL);

    dateElement.textContent = format;
  };

  updateTime();
  setInterval(updateTime, 1000);
}
