import { Shop } from './shop.class';

export class ClothingStore extends Shop {
  public wear(): string {
    return `${super.wear()}, scarf`;
  }
}
