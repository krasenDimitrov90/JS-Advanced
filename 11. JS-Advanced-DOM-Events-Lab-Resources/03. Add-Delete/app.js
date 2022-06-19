function addItem() {
    let inputTextElement = document.getElementById('newItemText');
    let buttonElement = document.querySelector('[value="Add"]');
    let ulItemsElements = document.getElementById('items');

    let newLiItemElement = document.createElement('li');
    newLiItemElement.textContent = inputTextElement.value;
    let deleteElement = document.createElement('a');
    deleteElement.setAttribute('href' , '#');
    deleteElement.textContent = '[Delete]';
    deleteElement.addEventListener('click' , function () {
        newLiItemElement.remove();
    })
    newLiItemElement.appendChild(deleteElement);

    ulItemsElements.appendChild(newLiItemElement);

}