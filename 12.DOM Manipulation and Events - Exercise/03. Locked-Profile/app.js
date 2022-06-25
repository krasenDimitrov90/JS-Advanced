function lockedProfile() {
    
    let buttonElements = document.querySelectorAll('#main div button');
    Array.from(buttonElements).forEach(button => {
        button.addEventListener('click' , function (e) {
            let currentButtonElement = e.currentTarget;
            let divElement = currentButtonElement.parentNode.children[9];
            let inputUnlockElement = currentButtonElement.parentNode.children[4];
            
            if (inputUnlockElement.checked) {
                if (currentButtonElement.textContent === 'Show more') {
                    divElement.style.display = 'block';
                    currentButtonElement.textContent = 'Hide it'
                } else if (currentButtonElement.textContent === 'Hide it') {
                    divElement.style.display = 'none';
                    currentButtonElement.textContent = 'Show more';
                }
            }
        })
    })
}