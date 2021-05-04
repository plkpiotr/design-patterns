import { Masterpiece } from './masterpiece.interface';

export abstract class Studio {
  public abstract factoryMethod(): Masterpiece;

  public createMasterpiece(): string {
    const artist = this.factoryMethod();
    return artist.create();
  }
}
