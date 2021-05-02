import { Clothing } from './clothing.class';

export class Scarf extends Clothing {
  public wear(): string {
    const withScarf = `${super.wear()}, scarf`;
    console.error(withScarf);
    return withScarf;
  }
}
