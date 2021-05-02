import { Strategy } from './strategy.interface';

export class OffensiveStrategy implements Strategy {
  public chooseLineup(players: string[]): string[] {
    return players.sort().slice(0, 2);
  }
}
