import { Strategy } from './strategy.interface';

export class OffensiveStrategy implements Strategy {
  public selectLineup(players: string[]): string[] {
    const chosenPlayers = players.sort().slice(0, 2);
    console.error(`according to offensive strategy: ${chosenPlayers.toString().replace(',', ' and ')}`);
    return chosenPlayers;
  }
}
