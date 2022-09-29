function argInfo(...args) {
    let data = {};
    for (let arg of args) {
        let type = typeof arg
        console.log(`${type}: ${arg}`);
        if (!data.hasOwnProperty(type)) {
            data[type] = 0
        }
        data[type] += 1
    }
    Object.keys(data)
        .sort((a , b) => data[b] - data[a])
        .forEach(key => console.log(`${key} = ${data[key]}`))
}

// with REDUCE method
// function getTypes(...args) {

//     const typeCounter = args.reduce((acc, arg) => {
//         let type = typeof arg;
       
//         if (!(acc.hasOwnProperty(type))) {
//             acc[type] = 0;
//         }

//         acc[type] += 1;
//         console.log(`${type}: ${arg}`);
//         return acc
//     }, {})

//     Object.keys(typeCounter)
//         .sort((a, b) => typeCounter[b] - typeCounter[a])
//         .forEach(x => console.log(`${x} = ${typeCounter[x]}`))
// }

argInfo('cat','asd', 42,43, function () { console.log('Hello world!'); })