//function userList() {
// // Call Web API to get a list of user
// $.ajax({
// url: 'http://localhost:8080/api/post/',
// type: 'GET',
// dataType: 'json',
// success: function (users) {
// userListSuccess(users);
// },
// error: function (request, message, error) {
// handleException(request, message, error);
// }
// });
//}
//function userListSuccess(texts) {
// // Iterate over the collection of data
// $.each(texts, function (index, text) {
// // Add a row to the user table
// userAddRow(text);
// });
//}
//function userAddRow(text) {
// // Check if <tbody> tag exists, add one if not
// if ($("#userTable tbody").length == 0) {
// $("#userTable").append("<tbody></tbody>");
// }
// // Append row to <table>
// $("#userTable tbody").append(
// userBuildTableRow(text));
//}
//
//function handleException(request, message, error) {
// let msg = "";
// msg += "Code: " + request.status + "\n";
// msg += "Text: " + request.statusText + "\n";
// if (request.responseJSON != null) {
// msg += "Message" + request.responseJSON.Message + "\n";
// }
// alert(msg);
//}
//function formClear() {
// $("#firstName").val("");
// $("#lastName").val("");
//  $("#middleName").val("");
//  $("#email").val("");
//  $("#phone").val("");
//  $("#gender").val("");
//  $("#question").val("");
//  $("#question2").val("");
//  $("#hours").val("");
//  $("#terms").val("");
//}
//function updateClick() {
// // Build user object from inputs
// const User = {};
// User.firstname = $("#firstName").val();
// User.lastname = $("#lastName").val();
// userAdd(User);
// User.firstname = $("#middleName").val();
// User.lastname = $("#email").val();
// User.firstname = $("#phone").val();
// User.lastname = $("#gender").val();
// User.firstname = $("#question").val();
// User.lastname = $("#question2").val();
// User.firstname = $("#hours").val();
// User.lastname = $("#terms").val();
//
//}
//function userAdd(text) {
// $.ajax({
// url: "http://localhost:8080/api/users",
// type: 'POST',
// contentType:
// "application/json;charset=utf-8",
// data: JSON.stringify(text),
// success: function (text) {
// userAddSuccess(text);
// },
// error: function (request, message, error) {
// handleException(request, message, error);
// }
// });
//}
//function userAddSuccess(text) {
// userAddRow(text);
// formClear();
//}