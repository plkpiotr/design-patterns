export interface Strategy {
  selectLineup(players: string[]): string[];
}
