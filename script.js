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


// inputs
var inputNine = document.getElementById("hourNineInput");
var inputTen = document.getElementById("hourTenInput");
var inputEleven = document.getElementById("hourElevenInput");
var inputTwelve = document.getElementById("hourTwelveInput");
var inputThirteen = document.getElementById("hourThirteenInput");
var inputFourteen = document.getElementById("hourFourteenInput");
var inputFifteen= document.getElementById("hourFifteenInput");
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




/////functions for each hour
function storeInputNine (){
    var inputValueNine = inputNine.value;
    localStorage.setItem("nine", inputValueNine)
    savedDataNine.textContent = inputValueNine;
    inputNine.value = ""
}

function storeInputTen (){
    var inputValueTen = inputTen.value;
    localStorage.setItem("ten", inputValueTen)
    savedDataTen.textContent = inputValueTen;
    inputTen.value = ""
}

function storeInputEleven (){
    var inputValueEleven = inputEleven.value;
    localStorage.setItem("eleven", inputValueEleven)
    savedDataEleven.textContent = inputValueEleven;
    inputEleven.value = ""
}

function storeInputTwelve (){
    var inputValueTwelve = inputTwelve.value;
    localStorage.setItem("Twelve", inputValueTwelve)
    savedDataTwelve.textContent = inputValueTwelve;
    inputTwelve.value = ""
}

function storeInputThirteen (){
    var inputValueThirteen = inputThirteen.value;
    localStorage.setItem("Thirteen", inputValueThirteen)
    savedDataThirteen.textContent = inputValueThirteen;
    inputThirteen.value = ""
}
function storeInputFourteen (){
    var inputValueFourteen = inputFourteen.value;
    localStorage.setItem("Fourteen", inputValueFourteen)
    savedDataFourteen.textContent = inputValueFourteen;
    inputFourteen.value = ""
}

function storeInputFifteen (){
    var inputValueFifteen = inputFifteen.value;
    localStorage.setItem("Fifteen", inputValueFifteen)
    savedDataFifteen.textContent = inputValueFifteen;
    inputFifteen.value = ""
}

function storeInputSixteen (){
    var inputValueSixteen = inputSixteen.value;
    localStorage.setItem("Sixteen", inputValueSixteen)
    savedDataSixteen.textContent = inputValueSixteen;
    inputSixteen.value = ""
}

function storeInputSeventeen (){
    var inputValueSeventeen = inputSeventeen.value;
    localStorage.setItem("Seventeen", inputValueSeventeen)
    savedDataSeventeen.textContent = inputValueSeventeen;
    inputSeventeen.value = ""
}





  






