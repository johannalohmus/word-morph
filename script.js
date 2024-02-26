var redSlider = document.getElementById("redSlider");
var redOutput = document.getElementById("redOutput");
redOutput.innerHTML = redSlider.value;

redSlider.oninput = function () {
    redOutput.innerHTML = this.value;
}

var greenSlider = document.getElementById("greenSlider");
var greenOutput = document.getElementById("greenOutput");
greenOutput.innerHTML = greenSlider.value;

greenSlider.oninput = function () {
    greenOutput.innerHTML = this.value;
}

var blueSlider = document.getElementById("blueSlider");
var blueOutput = document.getElementById("blueOutput");
blueOutput.innerHTML = blueSlider.value;

blueSlider.oninput = function () {
    blueOutput.innerHTML = this.value;
}