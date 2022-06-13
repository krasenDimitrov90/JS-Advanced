function editElement(text , match , replacer) {
    // TODO
    let pattern = new RegExp(match, 'g');
    text.textContent = text.textContent.replace(pattern , replacer)
    //return text.textContent
}