const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');
fontSizeControl.addEventListener('input', onInput);


function onInput (evt) {
    textSpan.style.fontSize = evt.currentTarget.value + 'px';
};