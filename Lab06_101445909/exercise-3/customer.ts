class Customer2 {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeter() {
        console.log(`Hello, ${this.firstName} ${this.lastName}!`);
    }
}

let customer2 = new Customer2("Jessica", "Lee");
customer2.greeter();
