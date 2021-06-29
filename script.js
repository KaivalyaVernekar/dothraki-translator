var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#input-area");
var translatedOutput = document.querySelector("#output-area");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function getTranslationURL(text) {
  return serverURL + "?text=" + text;
}

function errorHandler(error) {
  alert("Server error, try after some time....");
}

function clickHandler() {
  var inputText = textInput.value; // taking input

  // calling server for processing
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      translatedOutput.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
