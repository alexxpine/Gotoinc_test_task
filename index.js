let slider = document.getElementById('slider_container');
let rangeValues = document.getElementsByClassName('range');
let outputRanges = document.getElementsByClassName('demo');
let box = document.getElementById('color');
let toggle = document.getElementById('toggle');
let submitColor = document.getElementById('submit');
let cance = document.getElementById('cancel');
const changeColor = function() {
  box.style.backgroundColor = `RGB(${outputRanges[0].innerHTML}, ${outputRanges[1].innerHTML}, ${outputRanges[2].innerHTML})`;
}
const onChange = function() {
  outputRanges[i].innerHTML = this.value;
  changeColor();
}

const onSlidersBlockToggle = function() {
  if (toggle.value === 'See more') {
    slider.classList.add('show');
    toggle.value = 'See less';
  } else {
    slider.classList.remove('show');
    toggle.value = 'See more';
  }
}

cancel.onclick = function() {
  slider.classList.remove('show');
}

// for (let i = 0; i < rangeValues.length; i++) {
//   outputRanges[i].innerHTML = rangeValues[i].value;
// }
 
for (let i = 0; i < rangeValues.length; i++) {
  outputRanges[i].innerHTML = rangeValues[i].value;
  rangeValues[i].oninput = function() {
  outputRanges[i].innerHTML = this.value;
  changeColor();
  }
}

box.style.backgroundColor = `RGB(${outputRanges[0].innerHTML}, ${outputRanges[1].innerHTML}, ${outputRanges[2].innerHTML})`;

// submitColor.onclick = function onSubmit() {
//   box.style.backgroundColor = `RGB(${outputRanges[0].innerHTML}, ${outputRanges[1].innerHTML}, ${outputRanges[2].innerHTML})`;
// }

changeColor();
