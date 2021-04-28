import { Strategy } from './strategy.interface';

export class FastestRoute implements Strategy {
  public findRoute(start: string, destination: string): void {
    console.warn(`the fastest route from ${start} to ${destination}`);
  }
}
