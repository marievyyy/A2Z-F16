

// var inputText;
// var output;

// function setup() {
//     noCanvas();
//     inputText = createInput();
//     output = select('#output');
//     //inputText.changed(newText);
//     inputText.input(newText);
// }

// function newText() {
//     // createP(inputText.value());
//     output.html(inputText.value().split("").reverse().join(""));
// }

// ------------------------------------------ //
    
var reverseTitle = "input in reverse: ";

function newInput() {
    var output = document.getElementById("output");
    var rev = this.value.split("").reverse().join("");
    output.innerHTML = reverseTitle + rev;

    // output.innerHTML += this.value.split("") + "<br/>";

}

var holdInput = document.getElementById('inputText');
holdInput.onchange = newInput;








