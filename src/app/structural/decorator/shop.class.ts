import { Customer } from './customer.interface';

export class Shop implements Customer {
  constructor(private client: Customer) {}

  public wear(): void {
    this.client.wear();
  }
}
