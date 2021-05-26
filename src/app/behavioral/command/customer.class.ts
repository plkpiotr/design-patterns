import { Command } from './command.interface';

export class Customer {
  private firstCommand: Command;
  private secondCommand: Command;

  public setFirstCommand(firstCommand: Command): void {
    this.firstCommand = firstCommand;
  }

  public setSecondCommand(secondCommand: Command): void {
    this.secondCommand = secondCommand;
  }

  public executeCommandsStepByStep(): string {
    let commandsStepByStep = '';
    if (this.firstCommand !== undefined) {
      commandsStepByStep += this.firstCommand.execute() + ', ';
    }
    if (this.secondCommand !== undefined) {
      commandsStepByStep += this.secondCommand.execute();
    }
    return commandsStepByStep;
  }
}
