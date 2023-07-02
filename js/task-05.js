const input = document.querySelector ('#name-input');
const spun = document.querySelector ('#name-output');

input.addEventListener('input',(e) => {if(input.value === ''){spun.textContent = 'Anonymous'}
else {spun.textContent = input.value}})