import { Strategy } from './strategy.interface';

export class Team {
  constructor(private strategy: Strategy) {}

  public setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  public prepareLineup(): string[] {
    return this.strategy.chooseLineup(['Tia', 'Rocket', 'Ahito']);
  }
}
