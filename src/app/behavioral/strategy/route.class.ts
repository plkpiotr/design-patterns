import { Strategy } from './strategy.interface';

export class Route {
  constructor(private strategy: Strategy) {}

  public setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  public findRouteToRome(from: string): void {
    this.strategy.findRoute(from, 'Rome');
  }
}
