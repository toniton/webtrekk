
import { BaseModel } from '../config/base-model';

export class Customer extends BaseModel {
    _id: string;
    name: { first: string, last: string } = {
        first: null,
        last: null
    };
    birthday: string;
    gender: string;
    lastContact: string;
    customerLifetimeValue: number;

    constructor() {
        super();
    }

    getFullName = () => {
        return `${this.name.first} ${this.name.last}`;
    }
}
