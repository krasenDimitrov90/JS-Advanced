function sortProducts(input) {

    let sortedProducts = input.sort((a , b) => a.localeCompare(b))
    let groupedProducts = {};
    for (let line of sortedProducts) {
        let group = line[0];
        let [product , price] = line.split(' : ');
        price = Number(price);
        if (!groupedProducts[group]) {
            groupedProducts[group] = [];
        }
        let data = {product , price}
        groupedProducts[group].push(data);
        
    }
    
    for (let group in groupedProducts) {
        console.log(group);
        let groupData = groupedProducts[group];
        for (let data of groupData) {
            console.log(`  ${data.product}: ${data.price}`);
        }
    }
}

sortProducts(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)