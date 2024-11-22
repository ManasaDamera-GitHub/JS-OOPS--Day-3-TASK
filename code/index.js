//class
class Book {
    title;
    author;
    isbn;
    // constructor
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    // methods
    checkout(check) {
        console.log(this.title, check);
    }
    returnBook() {
        console.log(this.title, 'returned');
    }
    updateTitle(newTitle) {
        this.title = newTitle;
    }
}
// object
var B1 = new Book("manifesting", 'allen', '2001');
console.log(B1);
B1.checkout("done");
B1.returnBook();
B1.updateTitle('new beginning');
console.log(B1);

// code-2

class Product {
    name;
    price;
    category;

    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(amount) {
        console.log(this.name, "discount is", this.price - amount);
    }
    getPriceAfterDiscount(price) {
        console.log(this.name, "the Price after discount is", this.price - price);
    }
}
var P1 = new Product("footware", 2000, "women");
console.log(P1);
P1.applyDiscount(2000 / 10);
P1.getPriceAfterDiscount(2000 / 10);

//code-3

class BankAccount {
    accountHolderName;
    accountNumber;
    balance;

    constructor(accountHolderName, accountNumber, balance) {
        this.accountHolderName = accountHolderName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        console.log("the deposited amount in", this.accountNumber, "is", amount);
        this.balance = this.balance + amount;
        console.log("the current balance after deposit is", this.balance);
    }
    withdraw(amount) {
        console.log("withdrawn amount is", amount);
        this.balance = this.balance - amount;
        console.log("Balance after withdraw is", this.balance);
    }

    getBalance() {
        console.log("your account balance", this.balance);
    }
}
var Balance = new BankAccount("Kevin", "12345", 1000);
console.log(Balance);
Balance.deposit(1000);
Balance.withdraw(300);
Balance.getBalance();


// code-4
class Vehicle {
    model;
    licensePlate;
    mileage;

    constructor(model, licensePlate, mileage) {
        this.model = model;
        this.licensePlate = licensePlate;
        this.mileage = mileage;
    }

    drive(miles) {
        console.log("The bike mileage has incresed by", miles, "km/ltr");
        this.mileage = this.mileage + miles;
    }
    getMileage() {
        console.log("the current mileage of this", this.model, "is", this.mileage, "km/ltr.");
    }
}
var vehicle = new Vehicle("Passion Plus", "2812", 40);
console.log(vehicle);
vehicle.drive(5);
vehicle.getMileage();

// code -5

class Student {
    name;
    grade;

    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    setGrade(newGrade) {
        this.grade = newGrade;
    }
    getGrade(grade) {
        console.log("ashish got", this.grade, "in maths");
    }
}
var student1 = new Student("Ashish", "B");
student1.getGrade();
student1.setGrade("A");
student1.getGrade();