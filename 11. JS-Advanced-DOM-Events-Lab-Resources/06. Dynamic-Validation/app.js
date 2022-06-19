function validate() {
    
    let inputEmailElement = document.getElementById('email');
    
    inputEmailElement.addEventListener('change' , function (e) {
        if (!(/^[a-z]+@[a-z]+\.[a-z]+$/g).test(inputEmailElement.value)) {
            inputEmailElement.setAttribute('class' , 'error')
        } else {
            inputEmailElement.removeAttribute('class')
        }
    })
}