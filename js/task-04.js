let counterValue = 0;

const counterElement = document.getElementById('value');
const buttonDecrease = document.querySelector('.decrease');
const buttonIncrease = document.querySelector('.increase');
buttonDecrease.addEventListener ('click', () => {
    counterValue --;
    counterElement.textContent = counterValue;
})

buttonIncrease.addEventListener ('click', () => {
    counterValue ++;
    counterElement.textContent = counterValue;
});


