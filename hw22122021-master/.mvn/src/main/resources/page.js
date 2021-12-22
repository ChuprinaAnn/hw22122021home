function AnswerList() {
// Call Web API to get a list of user
$.ajax({
url: 'http://localhost:8080/get',
type: 'GET',
dataType: 'json',
success: function (answers) {
answerListSuccess(answers);
},
error: function (request, message, error) {
handleException(request, message, error);
}
});
}
function answerListSuccess(texts) {
// Iterate over the collection of data
$.each(texts, function (index, text) {
// Add a row to the user table
answerAddRow(text);
});
}
function answerAddRow(text) {
// Check if <tbody> tag exists, add one if not
if ($("#answerTable tbody").length == 0) {
$("#answerTable").append("<tbody></tbody>");
}
// Append row to <table>
$("#answerTable tbody").append(
answerBuildTableRow(text));
}

function handleException(request, message, error) {
let msg = "";
msg += "Code: " + request.status + "\n";
msg += "Text: " + request.statusText + "\n";
if (request.responseJSON != null) {
msg += "Message" + request.responseJSON.Message + "\n";
}
alert(msg);
}
function formClear() {
$("#firstName").val("");
$("#lastName").val("");
 $("#middleName").val("");
 $("#email").val("");
 $("#phone").val("");
 $("#gender").val("");
 $("#question").val("");
 $("#question2").val("");
 $("#hours").val("");
 $("#terms").val("");
}
function updateClick() {
// Build user object from inputs
const Answer = {};
Answer.firstname = $("#firstName").val();
Answer.lastname = $("#lastName").val();
Answer.middleName = $("#middleName").val();
Answer.email = $("#email").val();
Answer.phone = $("#phone").val();
Answer.gender = $("#gender").val();
Answer.question = $("#question").val();
Answer.question2 = $("#question2").val();
Answer.hours = $("#hours").val();
Answer.terms = $("#terms").val();
answerAdd(Answer);
}
function answerAdd(text) {
$.ajax({
url: "http://localhost:8080/post",
type: 'POST',
contentType:
"application/json;charset=utf-8",
data: JSON.stringify(text),
success: function (text) {
answerAddSuccess(text);
},
error: function (request, message, error) {
handleException(request, message, error);
}
});
}
function answerAddSuccess(text) {
answerAddRow(text);
formClear();
}