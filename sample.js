var number1 = "";
var lastOperator = "";
function displaynumber(numb) {
    var displayTextbox = document.getElementById("numbDsplay");
    displayTextbox.value = displayTextbox.value + numb;
}
function onOperatorClick(operator) {
    lastOperator = operator;
    var displayTextbox = document.getElementById("numbDsplay");
    number1 = displayTextbox.value;
    displayTextbox.value = "";

}
function calculate() {
    var displayTextbox = document.getElementById("numbDsplay");
    var number2 = displayTextbox.value;
    var result = "";
    if (lastOperator == '+') {
        result = Number(number1) + Number(number2);
    }
    else if (lastOperator == '-') {
        result = Number(number1) - Number(number2);
    }
    else if (lastOperator == '*') {
        result = Number(number1) * Number(number2);
    }
    else if (lastOperator == '/') {
        result = Number(number1) / Number(number2);
    }
    else if (lastOperator == '%') {
        result = Number(number1) % Number(number2);
    }
    
        displayTextbox.value = result;
        number1 = "";

    }
    function clears(){
      document.getElementById("numbDsplay").value="";
  }