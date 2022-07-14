// It took me 3 hours for this task :D

class Company {
    departments = {};
    addEmployee(name, salary, position, department) {

        if (!name || !salary || !position || !department || salary <= 0) {
            throw new Error('Invalid input!')
        }
        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push({ name, salary, position})
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment() {
        let bestAvarageSalary = 0;
        let bestDepartment = '';

        Object.keys(this.departments)
            .forEach(key => {
                let avarageSalary = this.departments[key].reduce((acc, dep) => acc + dep.salary, 0)
                avarageSalary /= this.departments[key].length;
                if (avarageSalary > bestAvarageSalary) {
                    bestAvarageSalary = avarageSalary;
                    bestDepartment = key
                }
            })

        let result = `Best Department is: ${bestDepartment}` + '\n';
        result += `Average salary: ${bestAvarageSalary.toFixed(2)}`;

        this.departments[bestDepartment]
            .sort((a , b) => {
                return b.salary - a.salary || a.name.localeCompare(b.name)
            })
            .forEach(dep => result += '\n' + `${dep.name} ${dep.salary} ${dep.position}`)
        return result
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
