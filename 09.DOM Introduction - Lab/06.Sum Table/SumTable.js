function sumTable() {

    let costElements = document.querySelectorAll('table tr td:nth-of-type(2):not(#sum)');
    let costElArr = Array.from(costElements);
    let sum = costElArr.reduce((acc , cost) => {
        return acc += Number(cost.textContent);
    },0);

    let resultElement = document.getElementById('sum');
    resultElement.textContent = sum;
    
}