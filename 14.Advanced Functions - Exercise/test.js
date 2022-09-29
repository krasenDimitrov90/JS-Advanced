function getTypes(...args) {

    const typeCounter = args.reduce((acc, arg) => {
        let type = typeof arg;
       
        if (!(acc.hasOwnProperty(type))) {
            acc[type] = 0;
        }

        acc[type] += 1;
        console.log(`${type}: ${arg}`);
        return acc
    }, {})

    Object.keys(typeCounter)
        .sort((a, b) => typeCounter[b] - typeCounter[a])
        .forEach(x => console.log(`${x} = ${typeCounter[x]}`))
}

getTypes(32, 'cat', 42, function () { console.log('Hello world!'); })