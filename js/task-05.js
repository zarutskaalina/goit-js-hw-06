const input = document.getElementById('name-input');
const output = document.getElementById('name-output');
input.addEventListener('input', onClick);

function onClick (event) {
    const textOutput = event.currentTarget;
    textOutput.value === '' ?
    output.textContent = 'Anonymous':
    output.textContent = textOutput.value;
};