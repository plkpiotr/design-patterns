import { Movie } from './movie.class';
import { Remake } from './remake.class';

export class Adapter extends Movie {
  constructor(private adaptation: Remake) {
    super();
    this.adaptation = adaptation;
  }

  public displayVGA(): [number,  number] {
    const resolution = this.adaptation.displayHD();
    return this.adapt(resolution);
  }

  private adapt(resolution: [number, number]): [number, number] {
    const width = resolution[0] / 3;
    const height = resolution[1] / 3;
    return [width, height];
  }
}
