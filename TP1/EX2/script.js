const colorInput = document.getElementById('colorInput');
const sizeInput = document.getElementById('sizeInput');
const fontSelect = document.getElementById('fontSelect');
const paragraph = document.getElementById('paragraph');

function updateColor() {
    paragraph.style.color = colorInput.value;
}

function updateSize() {
    paragraph.style.fontSize = sizeInput.value + 'px';
}

function updateFont() {
    paragraph.style.fontFamily = fontSelect.value;
}

colorInput.addEventListener('input', updateColor);
sizeInput.addEventListener('input', updateSize);
fontSelect.addEventListener('change', updateFont);
