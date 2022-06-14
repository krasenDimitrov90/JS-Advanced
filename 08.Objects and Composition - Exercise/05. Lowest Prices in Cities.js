function lowPriceInTown(input) {

    let towns = [];
    for (let line of input) {
        let [town , product , price] = line.split(' | ')
        price = Number(price);
        towns.push({town , product , price});
    }

    let result = {};
    for (let line of towns) {
        let currentProduct = line.product;
        let currentTown = line.town;
        let currentPrice = Number(line.price);

        if (!result.hasOwnProperty(currentProduct)) {
            
            result[currentProduct] = {townName:currentTown , price:currentPrice};
        } 
        if (currentPrice < result[currentProduct].price) {
            result[currentProduct].price = currentPrice;
            result[currentProduct].townName = currentTown;
        }
        
    }
    let keys = Object.keys(result)
    for (const key of keys) {
        console.log(`${key} -> ${result[key].price} (${result[key].townName})`);
    }
}

lowPriceInTown(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)