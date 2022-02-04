const countItemsCategoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories: `, countItemsCategoriesRef.length);

countItemsCategoriesRef.forEach(titleText => {
   console.log(`Category: `, titleText.firstElementChild.textContent),
      console.log(`Elements: `, titleText.lastElementChild.children.length)
});