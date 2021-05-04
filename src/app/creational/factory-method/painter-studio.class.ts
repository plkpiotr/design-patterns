import { Studio } from './studio.class';
import { Masterpiece } from './masterpiece.interface';
import { Painter } from './painter.class';

export class PainterStudio extends Studio {
  public factoryMethod(): Masterpiece {
    return new Painter();
  }
}
