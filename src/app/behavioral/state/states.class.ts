import { State } from './state.class';

export class LiquidState extends State {
  public lowerTemperature(): string {
    this.hydrogenOxide.changeState(new SolidState());
    return 'ice';
  }

  public raiseTemperature(): string {
    return 'still water';
  }
}

export class SolidState extends State {
  public lowerTemperature(): string {
    return 'still ice';
  }

  public raiseTemperature(): string {
    this.hydrogenOxide.changeState(new LiquidState());
    return 'water';
  }
}
