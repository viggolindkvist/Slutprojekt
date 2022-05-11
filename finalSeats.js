//Print Out Counter and Price
const seatsSpan = document.querySelector("#seats");
const priceSpan = document.querySelector("#price");

seatsSpan.innerText = localStorage.getItem("seats");
priceSpan.innerText = parseInt(localStorage.getItem("seats")) * 10;

//Email Validation
function validation() {
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your Email Address is Valid.";
    text.style.color = "#00ff00";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please Enter a Valid Email Address";
    text.style.color = "#ff0000";
  }
  if (email == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
  }
}
