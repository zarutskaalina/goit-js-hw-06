const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");
fontSizeControl.addEventListener("input", onInput);

function onInput() {
  textSpan.style.fontSize = fontSizeControl.value + "px";
}

onInput();
