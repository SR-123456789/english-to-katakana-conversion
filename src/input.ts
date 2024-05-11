var XLSX = require('xlsx');
var fs = require('fs');
var workbook1 = XLSX.readFile('./src/カタカナ語英字辞書あーお.xlsx');
var workbook2 = XLSX.readFile('./src/カタカナ語英字辞書おーさ.xlsx');
var workbook3 = XLSX.readFile('./src/カタカナ語英字辞書さーで.xlsx');
var workbook4 = XLSX.readFile('./src/カタカナ語英字辞書でーひ.xlsx');
var workbook5 = XLSX.readFile('./src/カタカナ語英字辞書ひーみ.xlsx');
var workbook6 = XLSX.readFile('./src/カタカナ語英字辞書みーん.xlsx');

const excel2JSON = (workbook) => {

    var worksheet = workbook.Sheets[workbook.SheetNames[0]];
    var jsonData = XLSX.utils.sheet_to_json(worksheet);
    const newJSON = jsonData.filter((word) => {

        if (typeof word.English === "string" || word.English instanceof String) {


          } else {
            return false;
          }

        return !word.English.includes(" ")
    })
    return newJSON
};

const competeJSON=excel2JSON(workbook1).concat(excel2JSON(workbook2)).concat(excel2JSON(workbook3)).concat(excel2JSON(workbook4)).concat(excel2JSON(workbook5)).concat(excel2JSON(workbook6))
competeJSON.sort((a, b) => a.English.localeCompare(b.English));

fs.writeFileSync('dictionary.json', JSON.stringify(competeJSON));
