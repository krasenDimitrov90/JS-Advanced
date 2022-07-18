function toStringExtension() {
    // TODO: 

    function Person(name, email) {
        this.name = name;
        this.email = email;
    }
    Person.prototype.toString = function () {
        if (this.subject) {
            return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
        }
        if (this.course) {
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`
        }
        return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
    }

    function Teacher(name, email, subject) {
        this.subject = subject;
        Person.call(this, name, email, subject)
    }

    function Student(name, email, course) {
        this.course = course;
        Person.call(this, name, email, course)
    }

    Teacher.prototype = Object.create(Person.prototype);
    Student.prototype = Object.create(Person.prototype);

    // let person = new Person ('Krasen', 'abv')
    // let teacher = new Teacher('Doch' , 'gmail', 'I')
    // let student = new Student('Miro' , 'twit' , 'II')
    // console.log(person.toString());
    // console.log(teacher.toString());
    // console.log(student.toString());

    return {
        Person,
        Teacher,
        Student
    }
}

toStringExtension()
