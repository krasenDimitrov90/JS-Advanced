function deleteByEmail() {
    
    let inputElement = document.querySelector('[name="email"]');
    let emailTdElements = document.querySelectorAll('#customers td');
    let resultElement = document.getElementById('result');

    let emailElements = Array.from(emailTdElements);
    let target = emailElements.find(el => el.textContent === inputElement.value);
    
    if (target) {
        target.parentNode.remove();
        resultElement.textContent = 'Deleted';
    } else {
        resultElement.textContent = 'Not found.';
    }
    
}