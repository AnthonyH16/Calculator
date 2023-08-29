let first;
let operator
let second;
let answer;
let array1 = [];
let array2 = [];
let opArray = [];
let problem;
let tempOperator;
let value;
let display;

function operate(operator) {
    if (operator == "+") {
        add(first, second);
    }
    else if (operator == "-") {
        subtract(first, second);
    }
    else if (operator == 'x') {
        multiply(first, second);
    }
    else if (operator == '/') {
        divide(first, second);
    }
};


function add(a, b) {
    answer = a + b;
    array1 = [answer];
    array2 = [];
    operator = '';
    console.log(answer);
    byeBye();
    addToDisplay(answer);
    answer ='';
};

function subtract(a, b) {
    answer = a - b;
    array1 = [answer];
    array2 = [];
    operator = '';
    console.log(answer);
    byeBye();
    addToDisplay(answer);
    answer ='';
};

function multiply(a, b) {
    answer = a * b;
    array1 = [answer];
    array2 = [];
    operator = '';
    console.log(answer);
    byeBye();
    addToDisplay(answer);
    answer ='';
};

function divide(a, b) {
    if( b == 0){
        alert("Don't nobody got time for that");
        deleteAll();
    }
    else{
    answer = a / b;
    array1 = [answer];
    array2 = [];
    operator = '';
    console.log(answer);
    byeBye();
    addToDisplay(answer);
    answer ='';
    }
};

function numClick(obj) {
    // if (answer) {
    //     byeBye();
    //     array2.push(obj.id);
    //     text = obj.id;
    //     addToDisplay(text);

    // }
    /*else*/ if (!operator && !second) {

        array1.push(obj.id);
        text = obj.id ;
        addToDisplay(text);
    }
    else if (operator) {
        array2.push(obj.id);
        text = obj.id //+ "";
        addToDisplay(text);
    }
    else{
        deleteAll();
        array1.push(obj.id);
        text = obj.id;
        addToDisplay(text);
    }

};

function opClick(obj) {    
    if (!array2[0]) {
        byeBye();
        operator = obj.id;
    }
    else if (array2[0]) {
        getAnswer();

    };
    opArray.push(obj.id);
};

function byeBye() {
    const parent = document.querySelector('#display');
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
};

function deleteAll() {
    byeBye();
    array1 = [];
    array2 = [];
    operator = '';
    first = '';
    second = '';

};

function getAnswer() {
    if (!array2[0]){
       
    }
    else{
    byeBye();
    second = Number(array2.join(''));
    first = Number(array1.join(''));
    operator = opArray[opArray.length - 1];
    console.log(operator);
    operate(operator);
    }
};

function addToDisplay(obj) {
    display = document.getElementById('display');
    let text = document.createTextNode(obj);
    display.appendChild(text);
};

