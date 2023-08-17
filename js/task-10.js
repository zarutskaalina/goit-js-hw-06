function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amountInput = document.querySelector(".amount-input");
const createButton = document.querySelector(".create-button");
const destroyButton = document.querySelector(".destroy-button");
const boxesContainer = document.getElementById("boxes");

createButton.addEventListener("click", () => createBoxes(amountInput.value));

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const container = document.createElement("div");
    boxesContainer.append(container);
    boxesContainer.firstChild.style.height = `${size}px`;
    boxesContainer.firstChild.style.width = `${size}px`;
    boxesContainer.style.backgroundColor = getRandomHexColor();
    size += 10;
  }
}

destroyButton.addEventListener("click", () => destroyBoxes(boxesContainer));

function destroyBoxes(container) {
  container.innerHTML = null;
}
