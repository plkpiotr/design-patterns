import { Person } from './person.interface';

export class Woman implements Person {
  public wear(): string {
    const casualClothes = 'wear casual clothes';
    console.log(casualClothes);
    return `${casualClothes}`;
  }
}
