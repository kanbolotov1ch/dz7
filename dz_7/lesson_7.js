//1
class Worker {
    constructor(name, surname, rate, days) {
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }
    getSalary(rate, days) {
        let salary = this.rate * this.days;
        return salary
    }
}
const lon = new Worker('kutman', 'kurbanaliev', '1200', '30')
console.log(lon.name)
console.log(lon.surname)
console.log(lon.rate)
console.log(lon.days)
console.log(lon.getSalary())

//2
class WorkerTwo {
    constructor(name, surname, rate, days) {
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }
    get getFullname() {
        return console.log(`${this.name} ${this.surname}`)
    }
    get getDaysRate() {
        return console.log(`${this.days} ${this.rate}`)
    }
    getSalary() {
        return console.log(`${this.rate * this.days}`)
    }
}
const word = new WorkerTwo('kutman', 'kurbanaliev', '1200', '30')
word.getFullname
word.getDaysRate
word.getSalary()
