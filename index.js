const xlsxFile = require("read-excel-file/node");
const readline = require("readline-sync");
const WriteExcel = require("./WriteExcel");
const ReadSettings = require("./ReadSettings");

const path = "./dictionary.xlsx";
const True = "Правильно!";
const False = "Не верно";
let uncorrect = [];

function getRand(min, max) {
  return Math.random() * (max - min) + min;
}

async function start() {
  try {
    const data = new ReadSettings();
    let length = data.getLength();
    let timeLimit = data.getTimeLimit();
    console.log("Колличество проверяемых слов: " + length + "\n");
    console.log("Времени на ответ: " + timeLimit / 1000 + " секунд" + "\n");
    console.log("Нажмите любую кнопку, чтобы начать...\n");
    readline.question();
    let rows = await xlsxFile(path);
    rows.shift();
    let correct = 0;
    if (length > rows.length) length = rows.length;

    for (let i = 0; i < length; i++) {
      let index = Math.round(getRand(0, rows.length - 1));
      console.log(rows[index][1]);
      let start = new Date();
      answer = readline.question();
      let end = new Date();
      if (end - start > timeLimit || answer != rows[index][0]) {
        if (answer != rows[index][0])
          console.log(`${False}: ${rows[index][0]} \n`);
        else if (end - start > timeLimit)
          console.log(`${True} Но время вышло.\n`);
        uncorrect.push([rows[index][0], rows[index][1]]);
      } else {
        console.log(`${True}\n`);
        correct++;
      }
      rows.splice(index, 1);
    }
    new WriteExcel(uncorrect);
    console.log(
      `Правильных ответов: ${Math.round(
        (correct / length) * 100
      )}% (${correct} of ${length})\nНажмите любую кнопку, чтобы выйти...`
    );
    readline.question();
  } catch (error) {
    console.log(error);
  }
}
start();
