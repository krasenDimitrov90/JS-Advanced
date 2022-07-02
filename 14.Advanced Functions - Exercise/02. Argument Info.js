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

argInfo('cat','asd', 42,43, function () { console.log('Hello world!'); })