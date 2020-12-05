let heldValue = null;

let heldOperation = null;

let nextValue = null;

$('.digits button').on('click', function(){
    if(nextValue === null) {
        nextValue = '0';
    } 
    nextValue = nextValue + $(this).text();
    // console.log(nextValue);
    $('.next-value').text(updateDisplay());
});

$('.add').on('click', () => {
    setHeldOperation(add);
    $('.next-operation').text('+');
    updateDisplay();
});

$('.subtract').on('click', () => {
    setHeldOperation(subtract);
    $('.next-operation').text('-');
    updateDisplay();
});

$('.multiply').on('click', () => {
    setHeldOperation(multiply);
    $('.next-operation').text('*');
    updateDisplay();
});

$('.divide').on('click', () => {
    setHeldOperation(divide);
    $('.next-operation').text('/');
    updateDisplay();
});

$('.squareRoot').on('click', () => {
    setHeldOperation(squareRoot);
    $('.next-operation').text('√');
    updateDisplay();
});

$('.inverse').on('click', () => {
    setHeldOperation(inverse);
    $('.next-operation').text('inverse');
    updateDisplay();
});

// $('.plusMinus').on('click', () => {
//     setHeldOperation(plusMinus);
//     $('.next-operation').text('');
//     updateDisplay();
// });

$('.equals').on('click', () => {
    setHeldOperation(null);
    $('.next-operation').text('');
    updateDisplay();
});

$('.clear-all').on('click', () => {
    clearAll();
    $('.next-operation').text('');
    updateDisplay();
});

$('.clear-entry').on('click', () => {
    clearEntry();
    updateDisplay();
});

let showValue = (location, value) => {
    if(value === null) {
        $(location).text('');
    } else {
        $(location).text(Number(value));
    }
}

let updateDisplay = () => {
    showValue('.held-value', heldValue);
    showValue('.next-value', nextValue);
}

let clearAll = () => {
    heldValue = null;
    heldOperation = null;
    nextValue = null;
}

let clearEntry = () => {
    nextValue = null;
}

let add = (x, y) => Number(x) + Number(y);

let subtract = (x, y) => Number(x) - Number(y);

let multiply = (x, y) => Number(x) * Number(y);

let divide = (x, y) => { if(Number(y) === Number(0)) {alert('can not divide by zero') }
   return Number(x) / Number(y);
};

let squareRoot = (x, y) => Math.sqrt(Number((y ? y : x)));

let inverse = (x, y) => Number((1/x) || (1/y));

// let plusMinus = (x, y) => (-x);

function setHeldOperation(operation) {
    if(heldOperation !== null) {
        heldValue = heldOperation(heldValue, nextValue);
        console.log(heldValue);
    } else if(nextValue !== null) {
        heldValue = nextValue;
    }
    nextValue = null;
    heldOperation = operation;
}




