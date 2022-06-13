function largestNum(...numbers) {
    let largest = numbers[0];
    for (let num of numbers) {
        if (num > largest) {
            largest = num;
        }
    }
    console.log(`The largest number is ${largest}.`);
}

largestNum(5, -3, 16)