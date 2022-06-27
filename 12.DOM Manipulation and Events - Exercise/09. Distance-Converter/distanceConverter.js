function attachEventsListeners() {
    let convertBtnElmnt = document.getElementById('convert');
    let inputNumberElmnt = document.getElementById('inputDistance');
    let outputNumberElmnt = document.getElementById('outputDistance');
    let inputUnitsElmnts = document.getElementById('inputUnits');
    let otputUnitsElmnts = document.getElementById('outputUnits');
    let inputUnitValue = inputUnitsElmnts.value;
    let outputUnitValue = otputUnitsElmnts.value;


    convertBtnElmnt.addEventListener('click', inputUnitsInMeters)

    function inputUnitsInMeters() {
        let inputNumber = Number(inputNumberElmnt.value);
        let inputUnit = inputUnitsElmnts.value;
        let outputUnit = otputUnitsElmnts.value;
        let numberInMeters = multiply(inputNumber, inputUnit);
        let divider = divide(outputUnit);
        outputNumberElmnt.value = numberInMeters / divider;
    }

    function multiply(number, unit) {

        switch (unit) {
            case 'km':
                number *= 1000;
                break;
            case 'm':
                number *= 1;
                break;
            case 'cm':
                number *= 0.01;
                break;
            case 'mm':
                number *= 0.001;
                break;
            case 'mi':
                number *= 1609.34;
                break;
            case 'yrd':
                number *= 0.9144;
                break;
            case 'ft':
                number *= 0.3048;
                break;
            case 'in':
                number *= 0.0254;
                break;
        }
        return number;
    }

    function divide(unit) {

        let divideNumber = 0;
        switch (unit) {
            case 'km':
                divideNumber =  1000;
                break;
            case 'm':
                divideNumber =  1;
                break;
            case 'cm':
                divideNumber =  0.01;
                break;
            case 'mm':
                divideNumber =  0.001;
                break;
            case 'mi':
                divideNumber =  1609.34;
                break;
            case 'yrd':
                divideNumber =  0.9144;
                break;
            case 'ft':
                divideNumber =  0.3048;
                break;
            case 'in':
                divideNumber =  0.0254;
                break;
        }
        return divideNumber;
    }
}