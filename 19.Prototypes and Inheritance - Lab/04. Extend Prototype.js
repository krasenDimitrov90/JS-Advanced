function extendProrotype(classToExtend) {
    // TODO:
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ` + `${this.toString()}`
    }

}

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}


extendProrotype(Person)

let person = new Person('Krasen', 'abv');
console.log(person.toSpeciesString());