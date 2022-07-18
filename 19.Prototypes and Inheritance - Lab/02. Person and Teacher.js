function personAndTeacher() {
    // TODO:
    function Person(name, email) {
        this.name = name;
        this.email = email;
    }

    function Teacher (name, email, subject) {
        this.subject = subject
        Person.call(this, name, email)
    }

    Teacher.prototype = Object.create(Person.prototype);
    Teacher.prototype.greet = function () {
        return this.name + ' ' + 'says Hi!';
    }
    // let teacher = new Teacher('Donika', 'gmail', 'sub')
    // let person = new Person('Krasen' , 'abv');
    // console.log(person);
    // console.log(teacher.greet());

    return {
        Person,
        Teacher
    }
}

personAndTeacher()
