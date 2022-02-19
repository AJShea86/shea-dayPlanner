//function that displays current day at the top

//write function that saves input to local storage

//write function that GETS input from local storage

//write a function that will display input data on to the screen

//write a function that will change colors based on time

////////////////////////////////////////////////////////

var savedDataNine = document.getElementById("savedDataNine");
var savedDataTen = document.getElementById("savedDataTen");
var savedDataEleven = document.getElementById("savedDataEleven");
var savedDataTwelve = document.getElementById("savedDataTwelve");
var savedDataThirteen = document.getElementById("savedDataThirteen");
var savedDataFourteen = document.getElementById("savedDataFourteen");
var savedDataFifteen = document.getElementById("savedDataFifteen");
var savedDataSixteen = document.getElementById("savedDataSixteen");
var savedDataSeventeen = document.getElementById("savedDataSeventeen");
var clockElement = document.getElementById("clock");

// inputs
var inputNine = document.getElementById("hourNineInput");
var inputTen = document.getElementById("hourTenInput");
var inputEleven = document.getElementById("hourElevenInput");
var inputTwelve = document.getElementById("hourTwelveInput");
var inputThirteen = document.getElementById("hourThirteenInput");
var inputFourteen = document.getElementById("hourFourteenInput");
var inputFifteen = document.getElementById("hourFifteenInput");
var inputSixteen = document.getElementById("hourSixteenInput");
var inputSeventeen = document.getElementById("hourSeventeenInput");

// buttons
var addToNine = document.getElementById("addButtonNine");
var addToTen = document.getElementById("addButtonTen");
var addToEleven = document.getElementById("addButtonEleven");
var addToTwelve = document.getElementById("addButtonTwelve");
var addToThirteen = document.getElementById("addButtonThirteen");
var addToFourteen = document.getElementById("addButtonFourteen");
var addToFifteen = document.getElementById("addButtonFifteen");
var addToSixteen = document.getElementById("addButtonSixteen");
var addToSeventeen = document.getElementById("addButtonSeventeen");

addToNine.addEventListener("click", storeInputNine);
addToTen.addEventListener("click", storeInputTen);
addToEleven.addEventListener("click", storeInputEleven);
addToTwelve.addEventListener("click", storeInputTwelve);
addToThirteen.addEventListener("click", storeInputThirteen);
addToFourteen.addEventListener("click", storeInputFourteen);
addToFifteen.addEventListener("click", storeInputFifteen);
addToSixteen.addEventListener("click", storeInputSixteen);
addToSeventeen.addEventListener("click", storeInputSeventeen);

//functions to save and display items entered into the text area
function storeInputNine() {
  var inputValueNine = inputNine.value;
  localStorage.setItem("nine", inputValueNine);
  savedDataNine.textContent = inputValueNine;
  inputNine.value = "";
}
function storeInputTen() {
  var inputValueTen = inputTen.value;
  localStorage.setItem("ten", inputValueTen);
  savedDataTen.textContent = inputValueTen;
  inputTen.value = "";
}
function storeInputEleven() {
  var inputValueEleven = inputEleven.value;
  localStorage.setItem("eleven", inputValueEleven);
  savedDataEleven.textContent = inputValueEleven;
  inputEleven.value = "";
}
function storeInputTwelve() {
  var inputValueTwelve = inputTwelve.value;
  localStorage.setItem("twelve", inputValueTwelve);
  savedDataTwelve.textContent = inputValueTwelve;
  inputTwelve.value = "";
}
function storeInputThirteen() {
  var inputValueThirteen = inputThirteen.value;
  localStorage.setItem("thirteen", inputValueThirteen);
  savedDataThirteen.textContent = inputValueThirteen;
  inputThirteen.value = "";
}
function storeInputFourteen() {
  var inputValueFourteen = inputFourteen.value;
  localStorage.setItem("fourteen", inputValueFourteen);
  savedDataFourteen.textContent = inputValueFourteen;
  inputFourteen.value = "";
}
function storeInputFifteen() {
  var inputValueFifteen = inputFifteen.value;
  localStorage.setItem("fifteen", inputValueFifteen);
  savedDataFifteen.textContent = inputValueFifteen;
  inputFifteen.value = "";
}
function storeInputSixteen() {
  var inputValueSixteen = inputSixteen.value;
  localStorage.setItem("sixteen", inputValueSixteen);
  savedDataSixteen.textContent = inputValueSixteen;
  inputSixteen.value = "";
}
function storeInputSeventeen() {
  var inputValueSeventeen = inputSeventeen.value;
  localStorage.setItem("seventeen", inputValueSeventeen);
  savedDataSeventeen.textContent = inputValueSeventeen;
  inputSeventeen.value = "";
}

//function that displays the date and time
function clock() {
  // clockElement.textContent = new Date().toLocaleString();
  clockElement.textContent =
    moment().format("dddd") + " " + moment().format("MMMM Do YYYY, h:mm:ss a");
}
setInterval(clock, 1000);

///////////////////////////
function loadData() {
  var nineData = localStorage.getItem("nine");
  if (nineData !== null) {
    console.log(nineData);
    savedDataNine.textContent = nineData;
  }

  var tenData = localStorage.getItem("ten");
  if (tenData !== null) {
    console.log(tenData);
    savedDataTen.textContent = tenData;
  }

  var elevenData = localStorage.getItem("eleven");
  if (elevenData !== null) {
    console.log(elevenData);
    savedDataEleven.textContent = elevenData;
  }

  var twelveData = localStorage.getItem("twelve");
  if (twelveData !== null) {
    console.log(twelveData);
    savedDataTwelve.textContent = twelveData;
  }

  var thirteenData = localStorage.getItem("thirteen");
  if (thirteenData !== null) {
    console.log(thirteenData);
    savedDataThirteen.textContent = thirteenData;
  }
  var fourteenData = localStorage.getItem("fourteen");
  if (fourteenData !== null) {
    console.log(fourteenData);
    savedDataFourteen.textContent = fourteenData;
  }

  var fifteenData = localStorage.getItem("fifteen");
  if (fifteenData !== null) {
    console.log(fifteenData);
    savedDataFifteen.textContent = fifteenData;
  }

  var sixteenData = localStorage.getItem("sixteen");
  if (sixteenData !== null) {
    console.log(sixteenData);
    savedDataSixteen.textContent = sixteenData;
  }

  var seventeenData = localStorage.getItem("seventeen");
  if (seventeenData !== null) {
    console.log(seventeenData);
    savedDataSeventeen.textContent = seventeenData;
  }
}
loadData();

/////////////////////////////////

function loadDisplayColors() {
  var nine = document.getElementById("nineAM");
  var now = new Date().getHours();
  var test = now - 5;
  console.log(now, test);
  if (test < 17) {
    nine.style.backgroundColor = "#d3d3d3";
  }
}

loadDisplayColors();


