const textInput = document.getElementById("validation-input");
const length = document.querySelector('[data-length="6"]');
const inputElement = document.getElementById("validation-input");
textInput.addEventListener("blur", onBlur);

function onBlur(evt) {
  const input = evt.currentTarget;
  if (input.value.length === Number(length.dataset.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
