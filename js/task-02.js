const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');
const arrItems = [];

const ingredientRef = ingredients.forEach(ingredient => {
   const itemsRef = document.createElement('li');
   itemsRef.textContent = ingredient;
   itemsRef.classList.add('item');
   arrItems.push(itemsRef);   
});

listRef.append(...arrItems);