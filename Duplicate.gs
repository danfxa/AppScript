var sheetId = "1165iX1w8eTfM5vVHjpNk250W9YjYbFxAZSlx_GO4ZMg" //diisi id google sheet
var formId = "14sKIhZYm3J3LnTr_UvEU43MhB86a11y2B9qK8-UC4Pk" //diisi id google form

function myFunction(){
  var ss = SpreadsheetApp.openById(sheetId)
  var sheet = ss.getSheetByName("Form Responses 1")
  var form = FormApp.openById(formId)

/////////////////////////////////////////////
  var data = [...new Set(sheet.getDataRange().getDisplayValues().map(row=>row[1]))].join('|')
  var item = form.getItems().filter(item=>item.getTitle()=='isikan sesuai form')[0].asTextItem()
  var pattern = `(${data})`
  var textval = FormApp.createTextValidation().setHelpText("Nama sudah ada").requireTextDoesNotMatchPattern(pattern).build()
  item.setValidation(textval)

///////////////////////////////////////////////
  var data1 = [...new Set(sheet.getDataRange().getDisplayValues().map(row=>row[1]))].join('|')
  var item1 = form.getItems().filter(item=>item.getTitle()=='isikan sesuai form')[0].asParagraphTextItem()
  var pattern1 = `(${data1})`
  var textval1 = FormApp.createParagraphTextValidation().setHelpText("Alamat sudah ada").requireTextDoesNotMatchPattern(pattern1).build()
  item1.setValidation(textval1)

}