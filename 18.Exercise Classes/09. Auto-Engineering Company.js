function carsList(input) {
    let cars = {}
    
    for (let line of input) {
        let [currnetBrand , cuerrentModel , qty] = line.split(' | ');
        qty = Number(qty);
        if (!cars.hasOwnProperty(currnetBrand)) {
            cars[currnetBrand] = {};
        }
        if (!cars[currnetBrand].hasOwnProperty(cuerrentModel)) {
            cars[currnetBrand][cuerrentModel] = 0;
        }
        cars[currnetBrand][cuerrentModel] += qty;
    }
    let print = '';
    Object.entries(cars)
        .forEach(([brand , models], index) => {
            if(index !== 0) print += '\n';
            print += brand;
            Object.entries(models)
                .forEach(([model , qty]) => {
                    print += '\n' + `###${model} -> ${qty}`
                })
        })

    console.log(print);    

}

carsList(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X5 | 250',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)