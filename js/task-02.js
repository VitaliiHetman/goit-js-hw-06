const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector ('#ingredients')
console.log(list) 
const items = ingredients.map(ingredient => {
  const li =document.createElement('li')
  li.classList.add('ingredient')
  li.textContent = ingredient
  return li 
})
