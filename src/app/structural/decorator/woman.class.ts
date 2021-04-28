import { Customer } from './customer.interface';

export class Woman implements Customer {
  public wear(): void {
    console.log('wear casual clothes');
  }
}
