function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.body;
const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
bodyEl.addEventListener("click", onClick);

function onClick() {
  const randomColor = getRandomHexColor();
  bodyEl.style.background = randomColor;

  spanColor.textContent = randomColor;
  console.log(spanColor);
}
