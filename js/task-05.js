const input = document.getElementById("name-input");
const output = document.getElementById("name-output");
input.addEventListener("input", onInput);

function onInput(event) {
  const textOutput = event.currentTarget;
  textOutput.value.trim() === ""
    ? (output.textContent = "Anonymous")
    : (output.textContent = textOutput.value);
}
