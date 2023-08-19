const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const listItem = ingredients.map((ingredient) => {
  const listElement = document.createElement("li");
  listElement.classList.add("item");
  listElement.textContent = ingredient;
  return listElement;
});

ingredientsList.append(...listItem);
