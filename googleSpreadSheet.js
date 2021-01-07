var app = SpreadsheetApp;
var ss = app.getActiveSpreadsheet();
var activeSheet = ss.getActiveSheet();


function setNewNames(newNames, rowStart, column) {

  for (let i = 0; i < newNames.length; i++) {
    activeSheet.getRange(rowStart + i, column).setValue(newNames[i])
  }
}

function getNewNames(rowStart, rowEnd, column) {

  let fuck = [];

  for (let i = 0; i < rowEnd; i++) {

    let name = activeSheet.getRange(i + rowStart, column).getValue();



    if (name.length === 0) {
      continue;
    }


    fuck.push(flipName(name))
  }

  fuck.sort();


  return fuck;
}

function clearColumn(rowStart, rowEnd, column) {

  var range = activeSheet.getRange(rowStart, column, rowEnd, column);

  range.clear();
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

  if (newFuck.length = 1) {
    return finalName + newFuck[0] + " " + hasParentheses;
  }


  finalName = newFuck[1] + " " + newFuck[0] + " " + hasParentheses;

  return finalName;
}

function getNewNames(rowStart, rowEnd, column) {
  let fuck = [];

  for (let i = 0; i < rowEnd; i++) {

    let name = activeSheet.getRange(i + rowStart, column).getValue();

    if (name.length === 0) {
      continue;
    }

    fuck.push(flipName(name))
  }

  fuck.sort()

  return fuck;
}


function main(rowStart, rowEnd, column) {
  let newNames = getNewNames(rowStart, rowEnd, column);

  clearColumn(rowStart, rowEnd, column);

  setNewNames(newNames, rowStart, column);
}

function typeHere() {
  main(0, 0, 0)
}




