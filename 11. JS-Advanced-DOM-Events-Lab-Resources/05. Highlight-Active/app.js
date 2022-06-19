function focused() {
    let inputElements = document.querySelectorAll('div > div input[type="text"]')
    
    let mouseFocusedHandler = function (e) {
        e.currentTarget.parentNode.setAttribute('class' , 'focused')
    }

    let mouseUnFocucedHandler = (e) => {
        e.currentTarget.parentNode.removeAttribute('class')
    }

    for (const el of inputElements) {
        el.addEventListener('focus' , mouseFocusedHandler)
        el.addEventListener('blur' , mouseUnFocucedHandler)
    }
}