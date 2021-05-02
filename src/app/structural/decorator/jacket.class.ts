import { Clothing } from './clothing.class';

export class Jacket extends Clothing {
  public wear(): string {
    const withJacket = `${super.wear()}, jacket`;
    console.warn(withJacket);
    return withJacket;
  }
}
