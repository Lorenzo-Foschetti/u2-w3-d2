const inputName = document.getElementById("inputName");
const saveBtn = document.getElementById("saveBtn");
const headingName = document.getElementById("headingName");
const resetBtn = document.getElementById("resetBtn");
const form = document.querySelector("form");

const NAME_MEMORY = "name-memory";
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = inputName.value;
  localStorage.setItem(NAME_MEMORY, name);
  headingName.textContent = name;
});

//saveBtn.addEventListener("click", () => {
// const savedContent = localStorage.getItem(NAME_MEMORY);
// console.log(savedContent);

//if (savedContent) {
//headingName.innerHTML = savedContent;
//} else {
//  }
//});

resetBtn.addEventListener("click", () => {
  const hasAccepted = confirm("vuoi davvero resettare?");

  if (hasAccepted) {
    console.log("accettato");

    localStorage.removeItem(NAME_MEMORY);

    form.reset();
  } else {
    console.log("rifiutato");
    alert("non abbiamo cancellato i dati");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem(NAME_MEMORY);
  if (savedName) {
    headingName.textContent = savedName;
  }
});
