const decrBtn = document.querySelector ('[data-action="decrement"]');
const incrBtn = document.querySelector ('[data-action="increment"]');
const counterValue = document.querySelector ('#value');

let counterValueStart = 0;

decrBtn.addEventListener ('click', (e) => {counterValueStart -= 1
counterValue.textContent = counterValueStart});
incrBtn.addEventListener ('click', (e) => {counterValueStart += 1
    counterValue.textContent = counterValueStart});