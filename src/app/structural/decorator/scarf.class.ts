import { Clothing } from './clothing.class';

export class Scarf extends Clothing {
  public wear(): void {
    super.wear();
    console.warn('wear a scarf');
  }
}