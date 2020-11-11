const Excel = require("exceljs");
const MyDate = require("./MyDate");

module.exports = class WriteExcel {
  constructor(data) {
    let workbook = new Excel.Workbook();
    let worksheet = workbook.addWorksheet("Debtors");

    worksheet.columns = [
      { header: "слово", key: "english" },
      { header: "перевод", key: "russian" },
    ];

    data.forEach((e, index) => {
      worksheet.addRow({
        ...e,
        english: {
          formula: `="${data[index][0]}"`,
        },
        russian: {
          formula: `="${data[index][1]}"`,
        },
      });
      workbook.xlsx.writeFile(
        `Uncurrect words/Uncurrect words-${MyDate.prototype.getTodayStr()}.xlsx`
      );
    });
  }
};
