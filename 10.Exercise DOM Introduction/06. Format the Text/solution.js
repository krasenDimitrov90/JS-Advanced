function solve() {

  let textAreaInputElement = document.getElementById('input');
  let outputElement = document.getElementById('output');

  let text = textAreaInputElement.value;
  let splitText = text.split('.').filter(s => s !== '');

  while (splitText.length > 0) {

    let p = document.createElement('p');
    p.textContent = splitText.splice(0, 3).join('. ') + '.';
    outputElement.appendChild(p)
  }
}