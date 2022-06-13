function townPopulation(input) {

    let townData = {};
    

    for (let line of input) {
        let [name , count] = line.split(' <-> ');
        count = Number(count);
        if (!townData.hasOwnProperty(name)) {
            townData[name] = 0;
        }
        townData[name] += count;
    }
    for (let town in townData) {
        console.log(`${town} : ${townData[town]}`);
    }
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)