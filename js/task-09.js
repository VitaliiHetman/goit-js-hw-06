const button = document.querySelector ('.change-color')
const body = document.body 
const span = document.querySelector ('.color')



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


button.addEventListener ('click', (e) => {
  const backgroundColor = getRandomHexColor()
  body.style.backgroundColor = backgroundColor
  span.textContent = backgroundColor
})