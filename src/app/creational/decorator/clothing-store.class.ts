import { Shop } from './salesman.class';

export class ClothingStore extends Shop {
  public wear(): void {
    super.wear();
    console.error('Wear a jacket.');
  }
}
