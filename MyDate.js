module.exports = class MyDate {
  getTodayStr() {
    const date = new Date();
    const Year = date.getFullYear();
    const Month = date.getMonth();
    const Day = date.getDay();
    const Hours = date.getHours();
    const Minutes = date.getMinutes();
    const Second = date.getSeconds();
    return (
      Year +
      "-" +
      Month +
      "-" +
      Day +
      "-" +
      Hours +
      "-" +
      Minutes +
      "-" +
      Second
    );
  }
};
