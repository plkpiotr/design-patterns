import { Studio } from './studio.class';
import { Masterpiece } from './masterpiece.interface';
import { Sculptor } from './sculptor.class';

export class SculptorStudio extends Studio {
  public factoryMethod(): Masterpiece {
    return new Sculptor();
  }
}
