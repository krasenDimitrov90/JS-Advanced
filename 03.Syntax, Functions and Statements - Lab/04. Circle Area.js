function circleRadius(input) {
    let radius = input;
    if (typeof radius !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    } else {
        let area = Math.PI * Math.pow(radius,2);
        console.log(area.toFixed(2));
    }

}


circleRadius(5)
circleRadius('fdaf')