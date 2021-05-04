import { Masterpiece } from './masterpiece.interface';

export class Sculptor implements Masterpiece {
  public create(): string {
    return 'created a sculpture';
  }
}
