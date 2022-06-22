function generateReport() {
    
    let report = [];
    let checkBoxesElements = document.querySelectorAll('thead tr th input');
    let rowsElements = document.querySelectorAll('tbody tr');

    let checkBoxesElementsL = checkBoxesElements.length;
    let rowsElementsL = rowsElements.length;

    for (let i = 0; i < rowsElementsL; i++) {

        let data = {};
        for (let j = 0; j < checkBoxesElementsL; j++) {
           if (checkBoxesElements[j].checked) {
              data[checkBoxesElements[j].name] = rowsElements[i].children[j].textContent
           }  
        }
        report.push(data);
    }
    
    document.getElementById('output').textContent = JSON.stringify(report)
}