function addItem() {

    let addButtonElement = document.querySelector("input[value='Add']");
    addButtonElement.addEventListener('click', add())

    function add() {

        let selectElement = document.getElementById('menu');
        let inputTextElement = document.getElementById('newItemText');
        let inputValueElement = document.getElementById('newItemValue');

        let optionElement = document.createElement('option');
        optionElement.value = inputValueElement.value;
        optionElement.text = inputTextElement.value;

        selectElement.appendChild(optionElement);

        inputTextElement.value = '';
        inputValueElement.value = '';
    }
}