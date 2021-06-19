export class Customer {
  private _customerId: number;
  private _customerName: string;
  private _customerAge: number;
  private _customerDOB: Date;
  private _customerMobileNo: number;
  private _customerAdress: string;
  constructor(
    customerId?: number,
    customerName?: string,
    customerAge?: number,
    customerDOB?: Date,
    customerMobileNo?: number,
    customerAdress?: string
  ) {
      this._customerId = customerId;
      this._customerName = customerName;
      this._customerAge = customerAge;
      this._customerDOB = customerDOB;
      this._customerMobileNo = customerMobileNo;
      this._customerAdress = customerAdress;
  }
  public getCustomerId(): number {
    return this._customerId;
  }
  public setCustomerId(value: number) {
    this._customerId = value;
  }

  public getCustomerName(): string {
    return this._customerName;
  }
  public setCustomerName(value: string) {
    this._customerName = value;
  }

  public getCustomerAge(): number {
    return this._customerAge;
  }
  public setCustomerAge(value: number) {
    this._customerAge = value;
  }

  public getCustomerMobileNo(): number {
    return this._customerMobileNo;
  }
  public setCustomerMobileNo(value: number) {
    this._customerMobileNo = value;
  }

  public getCustomerDOB(): Date {
    return this._customerDOB;
  }
  public setCustomerDOB(value: Date) {
    this._customerDOB = value;
  }

  public getCustomerAdress(): string {
    return this._customerAdress;
  }
  public setCustomerAdress(value: string) {
    this._customerAdress = value;
  }
}
