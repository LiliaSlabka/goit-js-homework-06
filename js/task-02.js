const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.getElementById('ingredients')

const markup = ingredients
  .map(ingredient => {
  const listItem = document.createElement('li');
  listItem.classList.add('nav-link');
  listItem.textContent = ingredient;
  return listItem
})

  ulEl.append(...markup) 