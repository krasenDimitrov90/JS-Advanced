function addItem() {
    let ulItemsElements = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputElement.value;
    ulItemsElements.appendChild(newLiElement);
}