document.getElementById("submit").addEventListener("click", submit);
function submit() {
let name = document.getElementById("myname").value;
let email = document.getElementById("myemail").value;
if (name === "" || email ==="") {
  document.getElementById("notValidMessage").textContent="please enter your name,email and feedback message!";return;
}
let respond = "Thanks Mr/Mrs " +  name  + ", We have received your feedback, we will contact you with your "  +  email  + " please keep checking your email";
document.getElementById("validMessage").textContent= respond;
}
