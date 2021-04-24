import { Person } from './person.interface';

export class Woman implements Person {
  public wear(): void {
    console.log('wear casual clothes');
  }
}
