function cityInfo(name , population , treasury) {
    
    

    let cityData = {
        name: name,
        population: Number(population),
        treasury: Number(treasury)
    }

    return cityData;
}

cityInfo('Tortuga',
7000,
15000
)