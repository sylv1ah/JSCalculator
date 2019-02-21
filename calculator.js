var currentDisplay = 0;
var storedInput = 0;
var secondInput =0;
var operator = ""
var runningTotal = "";
var finalResult = "";

// const keys = document.querySelector('.keys');
// const calculator = document.querySelector('.calculator');

// keys.addEventListener('click', e => {
//     if(e.target.matches('button')){
        
//     }
// })

function inputNum(num){
    if(document.getElementById('display').value === '0'){
        document.getElementById('display').value = num;
        currentDisplay = document.getElementById('display').value;
    }else{
        document.getElementById('display').value = document.getElementById('display').value + num;
        currentDisplay = document.getElementById('display').value;
    }
    
    console.log("currentDisplay = " + currentDisplay);
    
};

function inputSymbol(sym){
    document.getElementById('display').value = document.getElementById('display').value + sym;
    // firstInput = document.getElementById('display').value.slice(0,-1);
    
    operator = sym;
    console.log("operator = " + operator)
    
};

function clearDisplay(){
    document.getElementById('display').value = "0";
    currentDisplay = "0";
    
    console.log("currentDisplay = " + currentDisplay);
    
};

function equate(){
    var equation = document.getElementById('display').value;
    if(equation){
        document.getElementById('display').value = eval(equation);
        current = 0;

    }
    console.log("equation = " + equation)
};

function inputZero(){
    if(document.getElementById('display').value === '0'){
        document.getElementById('display').value = document.getElementById('display').value + "";
        currentDisplay =  document.getElementById('display').value; 
    }else{
        document.getElementById('display').value = document.getElementById('display').value + '0';
        currentDisplay =  document.getElementById('display').value;
        console.log("currentDisplay = " + currentDisplay); 
    }
};

function decimal(){
    if(!document.getElementById('display').value.includes('.')){
        document.getElementById('display').value = document.getElementById('display').value + '.'
    }
}