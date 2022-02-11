Automation_Reply_Email_via_Google_Form_with_Google_Script

function sendEmail(e) {
  
  //response
  //getRespondentEmail()
  var html = HtmlService.createTemplateFromFile("Name_of_HTML_File");
  var htmlText = html.evaluate().getContent();
  
 // Logger.log(htmlText);
  var emailTo = e.response.getRespondentEmail();
  var subject = "Name_of_Subject";
  var options = { htmlBody: htmlText };
  
  if(emailTo !== undefined){
    GmailApp.sendEmail(emailTo, subject, options);
  }
}