const slider = document.getElementById('slider_container');
const rangeValues = document.getElementsByClassName('range');
const outputRanges = document.getElementsByClassName('demo');
const box = document.getElementById('color');
const toggle = document.getElementById('toggle');

const values = [0, 0, 0];

function changeColor() {
  box.style.backgroundColor = `RGB(${outputRanges[0].innerHTML}, ${outputRanges[1].innerHTML}, ${outputRanges[2].innerHTML})`;
}

function onChange(i) {
  outputRanges[i].innerHTML = rangeValues[i].value;
  changeColor();
}

function onSlidersBlockToggle() {
  if (toggle.value === 'See more') {
    slider.classList.add('show');
    toggle.value = 'See less';
  } else {
    slider.classList.remove('show');
    toggle.value = 'See more';
  }
}

function onCancel() {
  slider.classList.remove('show');
  toggle.value = 'See more';
  for (let i = 0; i < rangeValues.length; i++) {
    rangeValues[i].value = values[i];
    onChange(i);
  }
}

function onSubmit() {
  for (let i = 0; i < rangeValues.length; i++) {
    values[i] = rangeValues[i].value;
  }
}

//init
for (let i = 0; i < rangeValues.length; i++) {
  outputRanges[i].innerHTML = rangeValues[i].value;

  rangeValues[i].oninput = function() { onChange(i); }
}

changeColor();
