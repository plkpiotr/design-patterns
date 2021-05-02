import { Clothing } from './clothing.class';

export class Jacket extends Clothing {
  public wear(): string {
    return `${super.wear()}, jacket`;
  }
}
