const fs = require("fs");
const readline = require("readline-sync");

console.log("Введите колличество проверяемых слов:");
let length = readline.question();
console.log("Введите колличество времени на ответ(в секундах):");
let timeLimit = readline.question();
fs.writeFileSync("./settings.txt", length + ";" + timeLimit * 1000);
console.log("Нажмите любую кнопку, чтобы выйти...");
readline.question();
