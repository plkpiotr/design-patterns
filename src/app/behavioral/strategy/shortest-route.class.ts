import { Strategy } from './strategy.interface';

export class ShortestRoute implements Strategy {
  public findRoute(start: string, destination: string): void {
    console.error(`the shortest route from ${start} do ${destination}`);
  }
}
