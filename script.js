const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');
const redTextInput = document.getElementById('red-text');
const greenTextInput = document.getElementById('green-text');
const blueTextInput = document.getElementById('blue-text');
const colorPicker = document.getElementById('color-picker');
const colorBox = document.getElementById('color-box');
const rgbOutput = document.getElementById('rgb');
const hexOutput = document.getElementById('hex');

function updateColor() {
  const redValue = redInput.value;
  const greenValue = greenInput.value;
  const blueValue = blueInput.value;

  redTextInput.value = redValue;
  greenTextInput.value = greenValue;
  blueTextInput.value = blueValue;

  const rgbString = `${redValue}, ${greenValue}, ${blueValue}`;
  const hexString = rgbToHex(redValue, greenValue, blueValue);

  colorBox.style.backgroundColor = `rgb(${rgbString})`;
  rgbOutput.innerText = rgbString;
  hexOutput.innerText = `#${hexString}`;
}

function updateColorFromPicker() {
  const color = colorPicker.value;
  const redValue = parseInt(color.substring(1, 3), 16);
  const greenValue = parseInt(color.substring(3, 5), 16);
  const blueValue = parseInt(color.substring(5, 7), 16);

  redInput.value = redValue;
  greenInput.value = greenValue;
  blueInput.value = blueValue;

  updateColor();
}

function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

redInput.addEventListener('input', updateColor);
greenInput.addEventListener('input', updateColor);
blueInput.addEventListener('input', updateColor);

redTextInput.addEventListener('input', () => {
  redInput.value = redTextInput.value;
  updateColor();
});

greenTextInput.addEventListener('input', () => {
  greenInput.value = greenTextInput.value;
  updateColor();
});

blueTextInput.addEventListener('input', () => {
  blueInput.value = blueTextInput.value;
  updateColor();
});

colorPicker.addEventListener('input', updateColorFromPicker);

updateColor(); // Set initial color
