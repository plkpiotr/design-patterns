import { Person } from './person.interface';

export class Woman implements Person {
  public wear(): string {
    return 'wear casual clothes';
  }
}
