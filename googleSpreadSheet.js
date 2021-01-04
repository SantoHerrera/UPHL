function myFunction() {
  
    var app = SpreadsheetApp;
    var ss = app.getActiveSpreadsheet();
    var activeSheet = ss.getActiveSheet();
    
    var tempText = activeSheet.getRange(1, 1).getValue();
    
    activeSheet.getRange(1, 2).setValue(tempText)
    
    let fuck = [];
    
    
    
    
    let fuckit = activeSheet.getRange(3, 1, 8, 1).getValues();
    
    for(let i = 0; i < fuckit.length; i++) {
      for(let j = 0; j < fuckit[i].length; j++) {
        let newString = "";
        newString = newString + fuckit [i][j];
        
        fuck.push(newString)
      }
    }
    
    fuck.sort()
    
    Logger.log(fuck)
    
    }