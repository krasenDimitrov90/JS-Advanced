function solve() {
   let creatorEl = document.getElementById('creator');
   let titleEl = document.getElementById('title');
   let categoryEl = document.getElementById('category');
   let contentEl = document.getElementById('content');

   let siteContentEl = document.querySelector('.site-content section');

   let createBtnEl = document.querySelector('.create');

   createBtnEl.addEventListener('click', (e) => {
      e.preventDefault();
      let articleEl = document.createElement('article');
      let titleH1El = document.createElement('h1');
      let categoryPEl = document.createElement('p');
      let creatorPEl = document.createElement('p');
      let contentPEl = document.createElement('p');
      let divEl = document.createElement('div');
      let deleteBtn = document.createElement('button');
      let archiveBtn = document.createElement('button');

      titleH1El.innerText = titleEl.value;
      categoryPEl.innerHTML = 'Category:' + '<strong>' + categoryEl.value + '</strong>';
      creatorPEl.innerHTML = 'Creator:' + '<strong>' + creatorEl.value + '</strong>';
      contentPEl.innerText = contentEl.value;

      articleEl.appendChild(titleH1El)
      articleEl.appendChild(categoryPEl)
      articleEl.appendChild(creatorPEl)
      articleEl.appendChild(contentPEl)
      siteContentEl.appendChild(articleEl)

      divEl.className = 'buttons';
      deleteBtn.className = 'btn delete';
      deleteBtn.textContent = 'Delete';
      archiveBtn.className = 'btn archive';
      archiveBtn.textContent = 'Archive';
      divEl.appendChild(deleteBtn);
      divEl.appendChild(archiveBtn);
      articleEl.appendChild(divEl)

      creatorEl.value = '';
      titleEl.value = '';
      categoryEl.value = '';
      contentEl.value = ''; 

      deleteBtn.addEventListener('click', (e) => {
         articleEl.remove()
      });

      archiveBtn.addEventListener('click', (e) => {
         let archiveOlEl = document.querySelector('.archive-section ol')
         let liElement = document.createElement('li');
         liElement.textContent = titleH1El.innerText;

         // Below code is with help from another solution 
         
         archiveOlEl.appendChild(liElement);
         let archiveItems = [...archiveOlEl.querySelectorAll('li')];
         archiveOlEl.innerHTML = '';
         archiveItems.sort((a , b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => archiveOlEl.appendChild(li))
         articleEl.remove()
      });
   })
}
