function cityInfo(name, population, treasury) {

    let city = {
        name: name,
        population: Number(population),
        treasury: Number(treasury),
        taxRate: 10,
        collectTaxes: function () {
            this.treasury += this.taxRate * this.population;
        },
        applyGrowth: function (percentage) {
            this.population += this.population * (percentage / 100);
        },
        applyRecession: function (percentage) {
            this.treasury -= this.treasury * (percentage / 100);
        }
    }

    return city;
}

cityInfo('Tortuga',
    7000,
    15000
)