const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
console.log("Number of categories:", categoryItems.length);

categoryItems.forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  const elementsCount = category.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
