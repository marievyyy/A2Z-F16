
var srctxt;
var words;
var lines = [];

function preload() {
    srctxt = loadStrings("poemstwo.txt");
}

function setup() {

  noCanvas();
  srctxt = join(srctxt, " ");
  words = splitTokens(srctxt, " ,!.?");

  var seed = select("#seed");
  var submit = select("#submit");
  var output = select("#output");
  submit.mousePressed(function() {
      var phrase = diastic(seed.value(), words);
      var createLine = createP(phrase);
      createLine.class("text");
      lines.push(createLine);
  });

  var clearButton = select('#clear');
  clearButton.mousePressed(clearText);

}

function diastic(seed, words) {

  var phrase = "";
  var currentWord = 0;

  for ( var i = 0; i < seed.length; i++ ) {
    var seedLetter = seed.charAt(i); {

      for ( var j = currentWord; j < words.length; j++ ) {
        if (words[j].toLowerCase().charAt(0) == seedLetter ) {
          phrase += words[j];
          phrase += " ";
          phrase += words[j + 1];
          phrase += " ";
          phrase += words[j + 2];
          phrase += " ";
          phrase += words[j + 3];
          phrase += " ";
          phrase += words[j + 4];
          phrase += " ";
          phrase += "<br/> ";
          currentWord = j + 1;
          break;
        }
      }
    }
  }
  return phrase;
}

function clearText() {
      for ( var i = 0; i < lines.length; i++) {
       lines[i].remove();
      }
      lines = [];
}

