import Car from "../src/Car";
import BankAccount from "../src/BankAccount";
import Person from "../src/Person";

describe("OopExercises", () => {
  test("should return car info", () => {
    const car = new Car("Audi", "A6", "2022");

    expect(car.getCarInfo()).toBe("The A6 model of Audi made in 2022");
  });

  test("should return car info without inputs", () => {
    const car = new Car();

    expect(car.getCarInfo()).toBe("The  model of  made in ");
  });

  test("should return bank account balance between 1 and 10", () => {
    const bankAccount = new BankAccount();

    expect(bankAccount.getBalance()).toBeLessThan(11);
    expect(bankAccount.getBalance()).toBeGreaterThan(0);
  });

  test("should return original balance -1 unit", () => {
    const bankAccount = new BankAccount();
    const startingBalance = bankAccount.getBalance(); //10

    bankAccount.withdraw(1); //9

    expect(startingBalance - 1).toBe(bankAccount.getBalance());
  });

  test("should return original balance +1 unit", () => {
    const bankAccount = new BankAccount();
    const startingBalance = bankAccount.getBalance(); //10

    bankAccount.deposit(1); //11

    expect(startingBalance + 1).toBe(bankAccount.getBalance());
  });

  test("should return true if age is over than 18", () => {
    const person = new Person("Balázs", 20)
    const adult = person.isAdult()

    expect(adult).toBe(true);
  });

  test("should return false if age is less than 18", () => {
    const person = new Person("Larina", 17)
    const adult = person.isAdult()

    expect(adult).toBe(false);
  });
  // Push the rest of your changes, so I can have a look on them.
});
