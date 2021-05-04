import { Masterpiece } from './masterpiece.interface';

export class Painter implements Masterpiece {
  public create(): string {
    return 'created a painting';
  }
}
