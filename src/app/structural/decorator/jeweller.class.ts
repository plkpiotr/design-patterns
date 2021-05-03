import { Shop } from './shop.class';

export class Jeweller extends Shop {
  public wear(): string {
    return `${super.wear()}, bracelet`;
  }
}
