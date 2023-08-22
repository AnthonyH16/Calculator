let first = 0;
let operator
let second = 0;
let answer;

function split() {

};

function operate(operator) {
    if (operator == "+") {
        add(first, second);
    }
    else if (operator == "-") {
        subtract(first, second);
    }
    else if (operator == '*') {
        multiply(first, second);
    }
    else if (operator == '/') {
        divide(first, second);
    }
};


function add(a, b) {
    answer = a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(...nums) {
    let total = 1;
    for (i = 0; i < nums.length; i++) {
        total *= nums[i];
    };
    return total;
}

function divide(a, b) {
    return a / b;
}

function displayValues() {

}

let problem;
let array=[];
function numClick(obj) {
    let value = obj.id;
    let display = document.getElementById('display');
    let text = document.createTextNode(value);
    display.appendChild(text);
    problem = document.querySelector('#display').innerText;
    


    /*
    let value = obj.id;
    let problem = [];
    document.getElementById('display').textContent = value ; 
    addNum(value);  
    function addNum(value){ 
    problem.push(value);
    
    }
    console.log(problem);*/
}
function opClick(obj){
    array.push(problem); 
    byeBye();
    operator = obj.id;    
    first = +array[0];
    second = +array[1];
    operate(operator);
}

function byeBye(){
    const parent = document.querySelector('#display');
    while (parent.firstChild){
        parent.firstChild.remove();
    }
}

/*
const numButtons = document.querySelectorAll('#numButtons');
    numButtons.forEach((button) => {
        button.addEventListener('click' , () => {
            document.getElementById('display').textContent = `${button.id}` ;
        });
    });   */

//const butTest = document.querySelector('#one');
//butTest.onclick = () => document.getElementById('display').textContent = button.id ;



//const one = document.querySelector('#one');
//one.onclick = ()