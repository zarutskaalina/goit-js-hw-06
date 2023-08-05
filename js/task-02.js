const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const listElement = document.createElement('li');
  listElement.classList.add('item');
  listElement.textContent = ingredient;
  ingredientsList.append(listElement);
  console.dir(listElement);
})
