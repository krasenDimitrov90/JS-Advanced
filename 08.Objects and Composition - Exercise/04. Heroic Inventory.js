function heroRegister(input) {

    let heroesReg = [];
    let pattern = /\w+/g;
    let hero = {};
    for (let line of input) {
        let [name , level , ...items] = line.match(pattern);
        level = Number(level);
        hero = {name , level , items}
        heroesReg.push(hero);
    }
    console.log(JSON.stringify(heroesReg));
}

heroRegister(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)