const seatsSpan = document.querySelector("#seats");
const priceSpan = document.querySelector("#price");

seatsSpan.innerText = localStorage.getItem("seats");
priceSpan.innerText = parseInt(localStorage.getItem("seats")) * 10;
