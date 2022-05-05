//Plats väljare :p
const container = document.querySelector(".container");
let seats = 0;
localStorage.setItem("seats", seats);

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold")
  ) {
    if (e.target.classList.contains("selected")) {
      seats -= 1;
    } else {
      seats++;
    }
    e.target.classList.toggle("selected");
  }

//  console.log(seats);

  localStorage.setItem("seats", seats);
});

//console.log(window.location.href);


