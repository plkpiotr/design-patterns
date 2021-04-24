import { Shop } from './salesman.class';

export class Jeweller extends Shop {
  public wear(): void {
    super.wear();
    console.warn('wear a necklace');
  }
}
