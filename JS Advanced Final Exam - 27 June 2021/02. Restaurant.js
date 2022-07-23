class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(products) {
        let printResult = [];
        products.forEach(data => {
            let [product, qty, totalPrice] = data.split(' ');
            qty = Number(qty);
            totalPrice = Number(totalPrice);
            if (totalPrice <= this.budgetMoney) {
                this.budgetMoney -= totalPrice;
                if (!this.stockProducts.hasOwnProperty(product)) {
                    this.stockProducts[product] = 0;
                }
                this.stockProducts[product] += qty;
                printResult.push(`Successfully loaded ${qty} ${product}`);
                this.history.push(`Successfully loaded ${qty} ${product}`)
                return
            }
            printResult.push(`There was not enough money to load ${qty} ${product}`);
            this.history.push(`There was not enough money to load ${qty} ${product}`);
        })
        return printResult.join('\n')
    }
    addToMenu(meal, neededProducts, price) {
        if (this.menu.hasOwnProperty(meal)) {
            return `The ${meal} is already in the our menu, try something different.`;
        } else {
            this.menu[meal] = {
                neededProducts: [],
                price
            };
            neededProducts.forEach(data => {
                let [product, qty] = data.split(' ');
                qty = Number(qty);
                this.menu[meal].neededProducts.push({ [product]: qty })
            })
        }
        let mealsCount = Object.keys(this.menu).length;
        if (mealsCount === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        }
        return `Great idea! Now with the ${meal} we have ${mealsCount} meals in the menu, other ideas?`;
    }
    showTheMenu() {
        let keys = Object.keys(this.menu)
        if (keys.length === 0) {
            return `Our menu is not ready yet, please come later...`
        }

        let printResult = [];
        keys.forEach(meal => printResult.push(`${meal} - $ ${this.menu[meal].price}`));
        return printResult.join('\n')
    }
    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        let isNotEnoughProducts = this.menu[meal].neededProducts
            .some(data => {
                let [[product, quantity]] = Object.entries(data);
                return quantity > this.stockProducts[product];
            })
        if (isNotEnoughProducts) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }
        this.menu[meal].neededProducts.forEach(data => {
            let [[product, quantity]] = Object.entries(data);
            return this.stockProducts[product] -= quantity;
        });
        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));


