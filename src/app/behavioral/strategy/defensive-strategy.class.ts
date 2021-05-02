import { Strategy } from './strategy.interface';

export class DefensiveStrategy implements Strategy {
  public selectLineup(players: string[]): string[] {
    const chosenPlayers = players.sort().reverse().slice(0, 2);
    console.warn(`according to defensive strategy: ${chosenPlayers.toString().replace(',', ' and ')}`);
    return chosenPlayers;
  }
}
