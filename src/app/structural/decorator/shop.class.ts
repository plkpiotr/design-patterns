import { Person } from './person.interface';

export class Shop implements Person {
  constructor(private client: Person) {}

  public wear(): void {
    this.client.wear();
  }
}
