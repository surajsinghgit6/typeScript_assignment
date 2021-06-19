import { Customer } from "./customer";

export class Ticket {
    private _customer: Customer;
    private _source: string;
    private _destination: string;
    private _dateTime: Date;
    constructor(customer?: Customer, source?: string, destination?: string, dateTime?: Date){
        this._customer = customer;
        this._source = source;
        this._destination = destination;
        this._dateTime = dateTime;
    }

    public getCustomer(): Customer {
        return this._customer;
    }
    public setCustomer(value: Customer) {
        this._customer = value;
    }

    public getSource(): string {
        return this._source;
    }
    public setSource(value: string) {
        this._source = value;
    }
    
    public getDestination(): string {
        return this._destination;
    }
    public setDestination(value: string) {
        this._destination = value;
    }
    
    public getDateTime(): Date {
        return this._dateTime;
    }
    public setDateTime(value: Date) {
        this._dateTime = value;
    }
}