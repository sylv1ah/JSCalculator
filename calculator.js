var currentDisplay = 0;
var storedInput = 0;
var operator = "";
var finalResult = "";

function inputNum(num){
    if(document.getElementById('display').value === '0'){
        document.getElementById('display').value = num;
    }else{
        document.getElementById('display').value = document.getElementById('display').value + num;
        currentDisplay = document.getElementById('display').value;
    }
    console.log("currentDisplay = " + currentDisplay);
};

function inputSymbol(sym){
    storedInput = document.getElementById('display').value;
    currentDisplay = 0;
    if(document.getElementById('display').value.slice(-1) == '+'){
        document.getElementById('display').value = document.getElementById('display').value.replace(/.$/,sym)
    }else if(document.getElementById('display').value.slice(-1) == '-'){
        document.getElementById('display').value = document.getElementById('display').value.replace(/.$/,sym)
    }else if(document.getElementById('display').value.slice(-1) == '*'){
        document.getElementById('display').value = document.getElementById('display').value.replace(/.$/,sym)
    }else if(document.getElementById('display').value.slice(-1) == '/'){
        document.getElementById('display').value = document.getElementById('display').value.replace(/.$/,sym)
    }else{
        document.getElementById('display').value = document.getElementById('display').value + sym;
    }
    
    operator = sym;
    console.log("operator = " + operator);
    console.log("currentDisplay = " + currentDisplay);
    console.log("storedInput = " + storedInput);
    
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
        finalResult = eval(equation);
    }
    console.log("equation = " + equation);
    console.log("finalResult = " + finalResult)
};

function inputZero(){
    if(document.getElementById('display').value === '0'){
        document.getElementById('display').value = document.getElementById('display').value + "";
        currentDisplay =  document.getElementById('display').value; 
    }else if(currentDisplay === 0){
        document.getElementById('display').value = document.getElementById('display').value + "";
    }else{
        document.getElementById('display').value = document.getElementById('display').value + '0';
        currentDisplay =  document.getElementById('display').value;
        console.log("currentDisplay = " + currentDisplay); 
    }
};

function decimal(){
    let eachInput = document.getElementById('display').value.split(/[+*\/-]/g).pop();
    console.log(eachInput);
    if(!document.getElementById('display').value.includes('.')){
        document.getElementById('display').value = document.getElementById('display').value + '.';
    }else if(!eachInput.includes('.')){
        document.getElementById('display').value = document.getElementById('display').value + '.';
    }else{
        document.getElementById('display').value = document.getElementById('display').value + ""
    }
}