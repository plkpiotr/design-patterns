import { State } from './state.class';

export class HydrogenOxide {
  constructor(private state: State) {
    this.state.setHydrogenOxide(this);
  }

  public cool(): string {
    return this.state.lowerTemperature();
  }

  public warm(): string {
    return this.state.raiseTemperature();
  }

  public changeState(state: State): void {
    this.state = state;
    this.state.setHydrogenOxide(this);
  }

  public showName(): string {
    return this.state.showChemicalFormula();
  }
}
