function myFunction() {

  var app = SpreadsheetApp;
  var ss = app.getActiveSpreadsheet();
  var activeSheet = ss.getActiveSheet();

  var tempText = activeSheet.getRange(1, 1).getValue();

  activeSheet.getRange(1, 2).setValue(tempText)

  let fuck = [];




  let fuckit = activeSheet.getRange(3, 1, 8, 1).getValues();

  for (let i = 0; i < fuckit.length; i++) {
    for (let j = 0; j < fuckit[i].length; j++) {
      let newString = "";
      newString = newString + fuckit[i][j];

      fuck.push(newString)
    }
  }

  fuck.sort()

  Logger.log(fuck)

}

function flipName(name) {
  let hasParentheses = "";
  let newName = name;
  let finalName = "";

  if (name.includes("(")) {
    pos = name.indexOf("(");
    hasParentheses = name.slice(pos, name.lastIndexOf(")") + 2);
  }

  newName = name.replace(hasParentheses, "");

  let newFuck = newName.split(" ");

  finalName = newFuck[1] + " " + newFuck[0] + " " + hasParentheses;

  return finalName;
}


function clearColumn(rowStart, rowEnd, column) {
  var activeSheet = ss.getActiveSheet();
  var range = activeSheet.getRange(rowStart, column, rowEnd, column);

  range.clear()

}