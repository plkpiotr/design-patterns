import { Command } from './command.interface';

export class CashMachine implements Command {
  constructor(private cash: number) {}

  public execute(): string {
    return `cash out (${this.cash})`;
  }
}
