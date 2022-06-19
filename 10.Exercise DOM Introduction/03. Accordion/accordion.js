function toggle() {
    
    let button = document.querySelector('.head .button');
    let content = document.getElementById('extra');

    if (button.textContent === 'Less') {
        button.textContent = 'More';
        content.style.display = 'none';

    } else if (button.textContent === 'More') {
        button.textContent = 'Less';
        content.style.display = 'block';

    }
    
}