<<<<<<< HEAD
function solution() {

    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    return function (input) {
        let tokens = input.split(' ');
        let [action, product, qty] = tokens;
        switch (action) {
            case 'restock':
                microelements[product] += Number(qty);
                return 'Success';
                break;
            case 'prepare':
                let neededProducts = prepare(product, qty);
                let neededProduct = '';
                let keys = Object.keys(neededProducts)
                let isProductsNotEnough = keys.some(prod => {
                    if (neededProducts[prod] > microelements[prod]) {
                        neededProduct = prod;
                        return true;
                    } else {
                        return false
                    }
                })
                if (isProductsNotEnough) {
                    return `Error: not enough ${neededProduct} in stock`
                } else {
                    keys.forEach(prod => {
                        microelements[prod] -= neededProducts[prod];
                    })
                    return 'Success';
                }
                break;
            case 'report':
                return report(microelements)
                break;
        }
        
    }

    function prepare(meal, qty) {
        let neededProducts = {};
        switch (meal) {
            case 'apple':
                neededProducts.carbohydrate = 1 * qty;
                neededProducts.flavour = 2 * qty;
                break;
            case 'lemonade':
                neededProducts.carbohydrate = 10 * qty;
                neededProducts.flavour = 20 * qty;
                break;
            case 'burger':
                neededProducts.carbohydrate = 5 * qty;
                neededProducts.fat = 7 * qty;
                neededProducts.flavour = 3 * qty;
                break;
            case 'eggs':
                neededProducts.protein = 5 * qty;
                neededProducts.fat = 1 * qty;
                neededProducts.flavour = 1 * qty;
                break;
            case 'turkey':
                neededProducts.protein = 10 * qty;
                neededProducts.carbohydrate = 10 * qty;
                neededProducts.fat = 10 * qty;
                neededProducts.flavour = 10 * qty;
                break;


        }
        return neededProducts
    }

    function report(microelements) {
        //•	protein={qty} carbohydrate={qty} fat={qty} flavour={qty} 
        let proteinQty = microelements.protein;
        let carbohydrate = microelements.carbohydrate;
        let fat = microelements.fat;
        let flavour = microelements.flavour;
        return `protein=${proteinQty} carbohydrate=${carbohydrate} fat=${fat} flavour=${flavour}`
    }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));

=======
function solution() {

    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    return function (input) {
        let tokens = input.split(' ');
        let [action, product, qty] = tokens;
        switch (action) {
            case 'restock':
                microelements[product] += Number(qty);
                return 'Success';
                break;
            case 'prepare':
                let neededProducts = prepare(product, qty);
                let neededProduct = '';
                let keys = Object.keys(neededProducts)
                let isProductsNotEnough = keys.some(prod => {
                    if (neededProducts[prod] > microelements[prod]) {
                        neededProduct = prod;
                        return true;
                    } else {
                        return false
                    }
                })
                if (isProductsNotEnough) {
                    return `Error: not enough ${neededProduct} in stock`
                } else {
                    keys.forEach(prod => {
                        microelements[prod] -= neededProducts[prod];
                    })
                    return 'Success';
                }
                break;
            case 'report':
                return report(microelements)
                break;
        }
        
    }

    function prepare(meal, qty) {
        let neededProducts = {};
        switch (meal) {
            case 'apple':
                neededProducts.carbohydrate = 1 * qty;
                neededProducts.flavour = 2 * qty;
                break;
            case 'lemonade':
                neededProducts.carbohydrate = 10 * qty;
                neededProducts.flavour = 20 * qty;
                break;
            case 'burger':
                neededProducts.carbohydrate = 5 * qty;
                neededProducts.fat = 7 * qty;
                neededProducts.flavour = 3 * qty;
                break;
            case 'eggs':
                neededProducts.protein = 5 * qty;
                neededProducts.fat = 1 * qty;
                neededProducts.flavour = 1 * qty;
                break;
            case 'turkey':
                neededProducts.protein = 10 * qty;
                neededProducts.carbohydrate = 10 * qty;
                neededProducts.fat = 10 * qty;
                neededProducts.flavour = 10 * qty;
                break;


        }
        return neededProducts
    }

    function report(microelements) {
        //•	protein={qty} carbohydrate={qty} fat={qty} flavour={qty} 
        let proteinQty = microelements.protein;
        let carbohydrate = microelements.carbohydrate;
        let fat = microelements.fat;
        let flavour = microelements.flavour;
        return `protein=${proteinQty} carbohydrate=${carbohydrate} fat=${fat} flavour=${flavour}`
    }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));

>>>>>>> dd8b20849d2236d40f3151f4acf85fbb2b88dfd6
