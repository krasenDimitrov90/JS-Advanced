function solve() {

    let buttons = document.querySelectorAll('tfoot tr td button')
    let rowElmnts = document.querySelectorAll('tbody tr');
    let checkElmnt = document.getElementById('check');
    let tableElmnt = document.querySelector('table');
    let rowInputElmnts = [];
    let sudomuNumbers = [];
    for (let row of rowElmnts) {
        rowInputElmnts.push(row.querySelectorAll('input'))
    }
    buttons[0].addEventListener('click', function () {
        sudomuNumbers = [];
        Array.from(rowInputElmnts).forEach(el => {
            let currentNumbers = [];
            for (let i = 0; i < 3; i++) {

                currentNumbers.push(Number(el[i].value));
            }
            sudomuNumbers.push(currentNumbers);
        })
        for (let i = 0; i < 3; i++) {
            let currentNumbers = [];
            for (let j = 0; j < 3; j++) {
                currentNumbers.push(sudomuNumbers[j][i]);
            }
            sudomuNumbers.push(currentNumbers);
        }
        let isSolved = isSudomuSolved(sudomuNumbers);

        if (isSolved) {
            checkElmnt.textContent = 'You solve it! Congratulations!';
            checkElmnt.style.color = 'green';
            tableElmnt.style.border = '2px solid green';
        } else if (!isSolved) {
            checkElmnt.textContent = 'NOP! You are not done yet…';
            checkElmnt.style.color = 'red';
            tableElmnt.style.border = '2px solid red';
        }
    })

    buttons[1].addEventListener('click', function () {
        sudomuNumbers = [];
        tableElmnt.style.border = 'none';
        checkElmnt.textContent = '';
        Array.from(rowInputElmnts).forEach(el => {
            for (let i = 0; i < 3; i++) {
                el[i].value = '';
            }
            
        })
    })

    function isSudomuSolved(arr) {
        arr.forEach(el => {
            el.sort((a , b) => a - b)
        })
        let firstLine = arr[0].slice(0).join('');
        let isEqual = arr.every(el => el.join('') === firstLine);
        return isEqual;
    }
}