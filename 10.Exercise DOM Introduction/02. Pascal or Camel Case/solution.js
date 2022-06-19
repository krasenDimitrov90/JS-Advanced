function solve() {
  //TODO...
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let resultContainer = document.getElementById('result');

  text = text.toLowerCase();
  let textAsArr = text.split(' ');
  //let modifyText = resultContainer.textContent;

  if (convention === 'Camel Case') {
    resultContainer.textContent = textAsArr.reduce((prev , current) => {
      return prev += current[0].toUpperCase() + current.slice(1);
    });

  } else if (convention === 'Pascal Case') {
    resultContainer.textContent = textAsArr.reduce((acc , x) => {
      return acc += x[0].toUpperCase() + x.slice(1);
    },'');

  } else if (convention !== 'Camel Case' && convention !== 'Pascal Case') {
    resultContainer.textContent = 'Error!';
  }

}