import { Clothing } from './clothing.class';

export class Scarf extends Clothing {
  public wear(): string {
    return `${super.wear()}, scarf`;
  }
}
