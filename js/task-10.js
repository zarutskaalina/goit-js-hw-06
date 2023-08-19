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
  const limitMin = amountInput.min;
  const limitMax = amountInput.max;
  const step = parseInt(amountInput.step);
  let size = 30;
  const containers = [];

  if (amount < Number(limitMin) || amount > Number(limitMax)) {
    alert("The value is not in the available range!");
  } else {
    for (let i = 0; i < amount; i += step) {
      const container = document.createElement("div");
      container.style.height = `${size}px`;
      container.style.width = `${size}px`;
      container.style.backgroundColor = getRandomHexColor();
      containers.push(container);
      size += 10;
    }

    containers.map((container) => boxesContainer.append(container));
  }
}

destroyButton.addEventListener("click", () => destroyBoxes(boxesContainer));

function destroyBoxes(container) {
  container.innerHTML = "";
}
