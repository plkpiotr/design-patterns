import { Shop } from './shop.class';

export class Jeweller extends Shop {
  public wear(): void {
    super.wear();
    console.warn('wear a necklace');
  }
}
