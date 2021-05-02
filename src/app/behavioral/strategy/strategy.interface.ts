export interface Strategy {
  chooseLineup(players: string[]): string[];
}
