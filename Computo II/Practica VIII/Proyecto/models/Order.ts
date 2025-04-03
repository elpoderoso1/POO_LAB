import { Product } from "./Product";
import { Customer } from "./Customer";

export class Order {
    constructor(
        public id: number,
        public customer: Customer,
        public product: Product[],
        public total: number
    ) {}
}