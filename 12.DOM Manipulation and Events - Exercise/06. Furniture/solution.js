function solve() {

  let [generateButtonElement, buyButonElement] = document.querySelectorAll('button');
  let [furnitureListElement, reportElement] = document.querySelectorAll('textarea');
  let tbodyElement = document.querySelector('tbody');

  generateButtonElement.addEventListener('click', generate)
  buyButonElement.addEventListener('click', buy)

  function generate() {
    //let arr = JSON.parse(furnitureListElement.value)


    Array.from(JSON.parse(furnitureListElement.value))
      .forEach(line => {
        let checkBoxElement = document.createElement('INPUT');
        checkBoxElement.type = 'checkbox';

        let trElement = document.createElement('tr');
        let tokens = Object.entries(line);

        for (let [key, value] of tokens) {
          let tdElement = document.createElement('td');
          let pElelement = document.createElement('p');
          if (key === 'img') {
            let imgElement = document.createElement('IMG');
            imgElement.src = value;
            tdElement.appendChild(imgElement);
            trElement.prepend(tdElement);

          } else {
            pElelement.textContent = value;
            tdElement.appendChild(pElelement);
            trElement.appendChild(tdElement);
          }
        }
        let tdElement = document.createElement('td');
        tdElement.appendChild(checkBoxElement)
        trElement.appendChild(tdElement);

        tbodyElement.appendChild(trElement);
      })
  }

  function buy() {
    let rowElements = Array.from(document.querySelectorAll('tbody tr'))
    let filteredRowElements = rowElements.filter(el => el.querySelector('input').checked)
    let furnitures = [];
    let prices = [];
    let factors = [];
    let textResult = 'Bought furniture: ';

    filteredRowElements.forEach(el => {
      let [name , price , factor] = el.querySelectorAll('p');
      furnitures.push(name.textContent);
      prices.push(Number(price.textContent));
      factors.push(Number(factor.textContent));
    })
    textResult += furnitures.join(', ') + '\n';
    textResult += 'Total price: '
    textResult += ((prices.reduce((acc , el) => acc + el ,0)) / prices.length).toFixed(2) + '\n';
    textResult += 'Average decoration factor: '
    textResult += ((factors.reduce((acc , el) => acc + el ,0)) / factors.length)

    reportElement.value = textResult;
  }
}