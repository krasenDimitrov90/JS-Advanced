function solve() {
   // TODO...
   let imgElements = document.querySelectorAll('img');
   let spanElements = document.querySelectorAll('#result span');
   let historyElement = document.getElementById('history');
   let player1CardValue = null;
   let player2CardValue = null;
   let player1CardIndex = null;
   let player2CardIndex = null;
   console.log(spanElements);
   Array.from(imgElements)
      .forEach((el, index) => {
         el.addEventListener('click', function (e) {
            let playerId = e.currentTarget.parentNode.id;
            let value = e.currentTarget.name;
            switch (playerId) {
               case 'player1Div':
                  spanElements[0].textContent = value;
                  player1CardValue = Number(value);
                  player1CardIndex = index;
                  e.currentTarget.src = 'images/whiteCard.jpg'
                  break;
               case 'player2Div':
                  spanElements[2].textContent = value;
                  player2CardValue = Number(value);
                  player2CardIndex = index;
                  e.currentTarget.src = 'images/whiteCard.jpg'
                  break;
            }
            if (spanElements[0].textContent !== '' &&
               spanElements[2].textContent !== '') {
               historyElement.textContent += `[${spanElements[0].textContent} vs ${spanElements[2].textContent}] `;
               spanElements[0].textContent = '';
               spanElements[2].textContent = '';
            }
            if (player1CardValue !== null && player2CardValue !== null) {
               if (player1CardValue > player2CardValue) {
                  imgElements[player1CardIndex].style.border = '2px solid green';
                  imgElements[player2CardIndex].style.border = '2px solid red';
               } else if (player1CardValue < player2CardValue) {
                  imgElements[player2CardIndex].style.border = '2px solid green';
                  imgElements[player1CardIndex].style.border = '2px solid red';
               }
               player1CardValue = null;
               player2CardValue = null;
               player1CardIndex = null;
               player2CardIndex = null;
            }

         })
      })
}