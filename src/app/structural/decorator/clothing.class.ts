import { Person } from './person.interface';

export class Clothing implements Person {
  constructor(private person: Person) {}

  public wear(): void {
    this.person.wear();
  }
}
