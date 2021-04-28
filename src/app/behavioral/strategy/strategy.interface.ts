export interface Strategy {
  findRoute(start: string, destination: string): void;
}
