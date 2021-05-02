import { Strategy } from './strategy.interface';

export class DefensiveStrategy implements Strategy {
  public chooseLineup(players: string[]): string[] {
    return players.sort().reverse().slice(0, 2);
  }
}
