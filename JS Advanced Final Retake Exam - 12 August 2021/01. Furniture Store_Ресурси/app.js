window.addEventListener('load', solve);

function solve() {
    let addBtn = document.getElementById('add');



    let furnitureListEl = document.getElementById('furniture-list');
    let totalPrice = 0;
    let totalPriceEl = document.querySelector('.total-price');

    // let inputElements = [modelInputEl, yearInputEl, descriptionInputEl, priceInputEl];

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let modelInputEl = document.getElementById('model');
        let yearInputEl = document.getElementById('year');
        let descriptionInputEl = document.getElementById('description');
        let priceInputEl = document.getElementById('price');

        let model = modelInputEl.value;
        let year = yearInputEl.value;
        let description = descriptionInputEl.value;
        let price = Number(priceInputEl.value);

        if (model === '' || description === '' || year <= 0 || price <= 0) {
            return
        }

        let trInfoEl = document.createElement('tr');
        trInfoEl.classList.add('info');
        let tdModelEl = document.createElement('td');
        let tdpriceEl = document.createElement('td');
        tdModelEl.textContent = model;
        tdpriceEl.textContent = price.toFixed(2);
        trInfoEl.appendChild(tdModelEl);
        trInfoEl.appendChild(tdpriceEl);

        let trDescriptionEl = document.createElement('tr');
        trDescriptionEl.classList.add('hide');
        let tdYearEl = document.createElement('td');
        let tddescriptionEL = document.createElement('td');
        tdYearEl.textContent = 'Year: ' + year;
        tddescriptionEL.textContent = 'Description: ' + description;
        tddescriptionEL.setAttribute('colspan', 3);
        trDescriptionEl.appendChild(tdYearEl);
        trDescriptionEl.appendChild(tddescriptionEL);

        let tdBtnsEl = document.createElement('td');
        let moreInfoBtn = document.createElement('button');
        let buyBtnEl = document.createElement('button');

        moreInfoBtn.classList.add('moreBtn');
        moreInfoBtn.textContent = 'More Info';
        buyBtnEl.classList.add('buyBtn');
        buyBtnEl.textContent = 'Buy it';

        tdBtnsEl.appendChild(moreInfoBtn);
        tdBtnsEl.appendChild(buyBtnEl);

        trInfoEl.appendChild(tdBtnsEl);

        furnitureListEl.appendChild(trInfoEl);
        furnitureListEl.appendChild(trDescriptionEl);

        modelInputEl.value = '';
        yearInputEl.value = '';
        descriptionInputEl.value = '';
        priceInputEl.value = '';

        moreInfoBtn.addEventListener('click', (e) => {
            if (e.currentTarget.textContent === 'More Info') {
                e.currentTarget.textContent = 'Less Info';
                trDescriptionEl.style.display = 'contents';
            } else {
                e.currentTarget.textContent = 'More Info';
                trDescriptionEl.style.display = 'none';
            }
        })

        buyBtnEl.addEventListener('click', (e) => {
            totalPrice += price;
            totalPriceEl.textContent = totalPrice.toFixed(2);
            furnitureListEl.removeChild(trInfoEl);
            furnitureListEl.removeChild(trDescriptionEl);
        })
    })
}
