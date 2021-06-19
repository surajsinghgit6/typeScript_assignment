import { Customer } from "./customer";
// import { Ticket } from "./ticket";

class Main {
  private customer: Customer[] = [];
  // private ticket: Ticket[] = [];
  constructor() {}

  public addCustomer(): void {
    this.customer.push(
      new Customer(
        1,
        "suraj",
        25,
        new Date("October 06, 1996"),
        1234567890,
        "Ranchi"
      )
    );
    let customerObj = new Customer();
    customerObj.setCustomerId(2);
    customerObj.setCustomerName("Gajre");
    customerObj.setCustomerAge(25);
    customerObj.setCustomerDOB(new Date("July 05,1996"));
    customerObj.setCustomerMobileNo(6567727283);
    customerObj.setCustomerAdress("Pune");
    this.customer.push(customerObj);
    //   console.table(this.customer);
  }
  public getCustomerByCity(city: string): void {
    const result = this.customer.filter(
      (data) => data.getCustomerAdress() === city
    );
    if (result.length) {
      console.table(result);
    } else {
      console.log("Result not found");
    }
  }
  public getCustomerById(id: number): void {
    const result = this.customer.filter((data) => data.getCustomerId() === id);
    if (result.length) {
      console.table(result);
    } else {
      console.log("Result not found");
    }
  }

  public insertionSort(inputArr: Customer[]) {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
      let current = inputArr[i];
      let j = i - 1;
      while (
        j > -1 &&
        current.getCustomerName() < inputArr[j].getCustomerName()
      ) {
        inputArr[j + 1] = inputArr[j];
        j--;
      }
      inputArr[j + 1] = current;
    }
    return inputArr;
  }
  private checkCustomerValid(id: number, phNo: number): number {
    const filterCustomer = this.customer.filter(
      (customer) =>
        customer.getCustomerId() === id &&
        customer.getCustomerMobileNo() === phNo
    );
    return filterCustomer.length;
  }
  private checkAddressValid(source: string, destination: string): boolean {
    return source !== destination;
  }
  private checkDateValid(date: Date): boolean {
    const currentDate = new Date();
    const maxFutureDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      currentDate.getDate()
    );
    const userinputDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + 1
    );
    return userinputDate > currentDate && userinputDate <= maxFutureDate;
  }

  public bookTicket(
    id: number,
    phNo: number,
    source: string,
    destination: string,
    date: Date
  ) {
    const isCustomerValid = this.checkCustomerValid(id, phNo);
    if (isCustomerValid) {
      const isAddressValid = this.checkAddressValid(source, destination);
      if (isAddressValid) {
        const isDateValid = this.checkDateValid(date);
        if (isDateValid) {
          console.log("ticket confirmed");
        } else {
          console.log("Date is invalid");
        }
      } else {
        console.log("Source and Destination can not be same");
      }
    } else {
      console.log("Customer Not found");
    }
  }

  public getAllCustomer(): void {
    let result = this.insertionSort(this.customer);
    console.table(result);
  }
}
var main = new Main();
main.addCustomer();
// main.getCustomerByCity('Ranchi');
// main.getCustomerById(2);
// main.getAllCustomer();
main.bookTicket(
  1,
  1234567890,
  "Ranchi",
  "Pune",
  new Date("December, 25, 2020")
);
