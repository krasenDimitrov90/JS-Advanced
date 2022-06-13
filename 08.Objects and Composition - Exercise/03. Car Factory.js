function carFactory(car) {

    let carriage = {
        type: car.carriage,
        color: car.color
    }
    let wheelSize = car.wheelsize;
    if (wheelSize % 2 === 0) {
        wheelSize -= 1;
    }
    let wheels = Array(4).fill(wheelSize);
    let volume = 0;
    let power = car.power;
    if (power < 91) {
        power = 90;
        volume = 1800;
    } else if (power < 121) {
        power = 120;
        volume = 2400;
    } else if (power > 120) {
        power = 200;
        volume = 3500;
    }

    let modifyedCar = {
        model: car.model,
        engine : {
            power: power,
            volume: volume 
        },
        carriage,
        wheels
    }
    console.log(modifyedCar);
    return modifyedCar;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
)