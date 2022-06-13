function calc() {
    // TODO: sum = num1 + num2
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value);
    let result = num1 + num2;
    document.querySelector('#sum').value = result;
    
}
