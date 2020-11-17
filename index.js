let rangeValues = document.getElementsByClassName('range');
let outputRanges = document.getElementsByClassName('demo');
let box = document.getElementById('color');
let submitColor = document.getElementById('submit');
let cancelColor = document.getElementById('cancel');

for (let i = 0; i < rangeValues.length; i++) {
  outputRanges[i].innerHTML = rangeValues[i].value;
}
 
for (let i = 0; i < rangeValues.length; i++) {
  rangeValues[i].oninput = function() {
    outputRanges[i].innerHTML = this.value;
  }
}

box.style.backgroundColor = `RGB(${outputRanges[0].innerHTML}, ${outputRanges[1].innerHTML}, ${outputRanges[2].innerHTML})`;

submitColor.onclick = function onSubmit() {
  box.style.backgroundColor = `RGB(${outputRanges[0].innerHTML}, ${outputRanges[1].innerHTML}, ${outputRanges[2].innerHTML})`;
}