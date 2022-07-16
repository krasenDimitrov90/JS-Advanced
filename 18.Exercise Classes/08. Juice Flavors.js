function juiceStorage(input) {

    let bottles = new Map();

    let juices = {};

    for (let line of input) {
        let tokens = line.split(' => ');
        let juice = tokens[0];
        let qty = Number(tokens[1]);
        if (!juices.hasOwnProperty(juice)) {
            juices[juice] = 0;
        }
        juices[juice] += qty;
        let currentJuiceQty = juices[juice];
        if(currentJuiceQty >= 1000) {
            let bottleCount = Math.floor(currentJuiceQty / 1000);
            if(!bottles.has(juice)) {
                bottles.set(juice, 0);
            }
            let currentBottles = bottles.get(juice);
            bottles.set(juice, (bottleCount + currentBottles));
            juices[juice] -= bottleCount * 1000;
        }
    }

    for (let line of bottles) {
        console.log(line.join(' => '));
    }
}

juiceStorage(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
)

