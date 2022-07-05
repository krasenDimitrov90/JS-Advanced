function solve() {
    let inputElements = document.querySelectorAll('#container input');
    let onScreenBtn = document.querySelector('#container button');
    let moviesSectionElmnt = document.getElementById('movies');
    let archiveUlElmnt = document.querySelector('#archive ul');
    let clearBtn = document.querySelector('#archive button');
    let [nameElmnt , hallElmnt , tPriceElmnt] = inputElements;


    clearBtn.addEventListener('click', () => {
        archiveUlElmnt.innerHTML = '';
    })

    onScreenBtn.addEventListener('click' , (e) => {
        e.preventDefault();
        moviesOnScreen()
        
    })

    function moviesOnScreen() {
        let movieName = nameElmnt.value;
        let hall = hallElmnt.value;
        let ticketPrice = Number(tPriceElmnt.value);

        if (movieName !== '' && hall !== '' && Number(ticketPrice)) {
            let liElmnt = document.createElement('li');
            let movieElmnt = document.createElement('span');
            let hallElmnt = document.createElement('strong');

            let divElmnt = document.createElement('div');
            let priceElmnt = document.createElement('strong');
            let ticketsCountElmnt = document.createElement('input');
            let archiveBtnElmnt = document.createElement('button');

            movieElmnt.textContent = movieName;
            hallElmnt.textContent = `Hall: ${hall}`;
            priceElmnt.textContent = ticketPrice.toFixed(2);
            ticketsCountElmnt.placeholder = 'Tickets Sold';
            archiveBtnElmnt.textContent = 'Archive';
            

            liElmnt.appendChild(movieElmnt);
            liElmnt.appendChild(hallElmnt);

            divElmnt.appendChild(priceElmnt);
            divElmnt.appendChild(ticketsCountElmnt);
            divElmnt.appendChild(archiveBtnElmnt);
            
            liElmnt.appendChild(divElmnt);
            moviesSectionElmnt.appendChild(liElmnt);

            archiveBtnElmnt.addEventListener('click', (e) => {
                let price = ticketPrice;
                let ticketCount = Number(ticketsCountElmnt.value);
                let totalPrice = price * ticketCount;

                if (!ticketCount) {
                    return;
                }

                let archiveListElmnt = document.createElement('li');
                let currentMovieElmnt = document.createElement('span');
                let totalElmnt = document.createElement('strong');
                let deleteBtn = document.createElement('button');

                currentMovieElmnt.textContent = movieName;
                totalElmnt.textContent =  `Total amount: ${totalPrice.toFixed(2)}`;
                deleteBtn.textContent = 'Delete';

                liElmnt.remove();

                deleteBtn.addEventListener('click' , () => {
                    archiveListElmnt.remove();
                })

                archiveListElmnt.appendChild(currentMovieElmnt)
                archiveListElmnt.appendChild(totalElmnt)
                archiveListElmnt.appendChild(deleteBtn)

                archiveUlElmnt.appendChild(archiveListElmnt)

            })
        }
        emptyInputElmnts()
    }

    function emptyInputElmnts() {
        for (let input of inputElements) {
            input.value = '';
        }
    }
}