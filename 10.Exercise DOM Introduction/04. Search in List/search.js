function search() {
   // TODO
   let rowsElements = Array.from(document.querySelectorAll('#towns li'));
   let searchedWord = document.getElementById('searchText').value;
   let matches = 0;
   let resultElement = document.getElementById('result');
   
   let liElements = Array.from(rowsElements);
   liElements.forEach(x => {
      if (x.textContent.includes(searchedWord) && searchedWord !== '') {
         matches++
         x.style.fontWeight = 'bold';
         x.style.textDecoration = 'underline'
      } else {
         x.style.fontWeight = 'noermal';
         x.style.textDecoration = 'none'
      }
   }) 
   resultElement.textContent = `${matches} matches found`;

}
