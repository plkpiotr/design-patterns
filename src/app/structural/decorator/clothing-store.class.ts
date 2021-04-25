import { Shop } from './shop.class';

export class ClothingStore extends Shop {
  public wear(): void {
    super.wear();
    console.error('wear a jacket');
  }
}
