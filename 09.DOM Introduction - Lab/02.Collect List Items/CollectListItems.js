function extractText() {
    // TODO
    let liElements = document.querySelectorAll('#items li');
    let result = document.getElementById('result');
    for (let li of liElements) {
        result.textContent += li.textContent + '\n';
    }
}