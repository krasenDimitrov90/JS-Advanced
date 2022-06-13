function objComposition(input) {

    let productCalorie = {};
    let inputL = input.length;

    for (let i = 0; i < inputL; i += 2) {
        let product = input[i];
        let calorie = Number(input[i +1]);
        productCalorie[product] = calorie;
    }

    console.log(productCalorie);
}

objComposition(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])