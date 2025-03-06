class Customer1 {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeter() {
        console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
}

let customer1 = new Customer("Jessica", "Lee");
customer1.greeter();
