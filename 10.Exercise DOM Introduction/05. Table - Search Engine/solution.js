function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let trRowElements = document.querySelectorAll('tbody tr');
      for (let tr of trRowElements) {
         tr.removeAttribute('class');
      }

      let tdRowsElements = document.querySelectorAll('tbody tr td');
      let searchInputElement = document.getElementById('searchField');

      let searchedText = searchInputElement.value;
      searchInputElement.value = '';
      for (let tdRow of tdRowsElements) {
         if (tdRow.textContent.includes(searchedText)) {
            tdRow.parentNode.setAttribute('class', 'select')
         }
      }
   }
}