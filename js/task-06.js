const textInput = document.getElementById('validation-input');
const length = document.querySelector('[data-length="6"]');
const inputElement = document.getElementById('validation-input');
textInput.addEventListener('blur', onBlur);

function onBlur (evt) {
const input = evt.currentTarget;
if (input.value.length > length.dataset.length) {
    input.classList.add('invalid');
}else {
    input.classList.add('valid');
}};