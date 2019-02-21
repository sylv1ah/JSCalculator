var currentVal = [""];
var firstInput = 0;
var secondInput =0;
var operator = ""
var runningTotal = "";
var finalResult = "";

function inputNum(num){
    
        document.getElementById('display').value = document.getElementById('display').value + num;
    //  document.getElementById('display').value = currentVal;
    
    // console.log("current val = " + currentVal);
    // console.log("operator = " + operator);
    // console.log("firstInput = " + firstInput);
    // console.log("secondInput = " + secondInput)
};

function inputSymbol(sym){
    document.getElementById('display').value = document.getElementById('display').value + sym;
    // firstInput = document.getElementById('display').value.slice(0,-1);
    // operator = sym;
    // console.log("currentVal = " + currentVal);
    // console.log("operator = " + operator);
    // console.log("firstInput = " + firstInput);
    // console.log("secondInput = " + secondInput)
};

function clearDisplay(){
    document.getElementById('display').value = "";
    // currentVal = "";
    // firstInput = "";
    // secondInput = "";
    // operator = "";
    // runningTotal = "";
    // finalResult = "";
    // console.log("currentVal = " + currentVal);
    // console.log("operator = " + operator);
    // console.log("firstInput = " + firstInput);
    // console.log("secondInput = " + secondInput)
};

function equate(){
    var equation = document.getElementById('display').value;
    if(equation){
        document.getElementById('display').value = eval(equation);
        currentVal = 0;

    }
    console.log("equation = " + equation)
}

// function decimal(){
//     if(!currentVal.includes('.')){
//         document.getElementById('display').value = currentVal + '.'
//     }
// }