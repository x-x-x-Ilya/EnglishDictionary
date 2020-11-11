const fs = require("fs");

module.exports = class ReadSettings {
  length;
  timeLimit;
  constructor() {
    let contents = fs.readFileSync("./settings.txt", "utf8");
    let data = contents.split(";");
    this.length = data[0];
    this.timeLimit = data[1];
  }
  getLength() {
    return this.length;
  }
  getTimeLimit() {
    return this.timeLimit;
  }
};
